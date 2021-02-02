import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'selecionarIngredientes.page.html',
  styleUrls: ['selecionarIngredientes.page.scss'],
  // animations: [
  //   trigger('manipularItem', [
  //     state('selecionar', style({
  //       backgroundColor: 'green',
  //       color: '#fff',
  //       opacity: 1
  //     })),
  //     state('excluir', style({
  //       backgroundColor: 'red',
  //       color: '#fff',
  //       opacity: 1
  //     })),
  //     transition(':leave', [
  //       style({ opacity: 1 }),
  //       animate(500, style({ opacity: 0 }))
  //     ]),
  //   ])
  // ]
})
export class SelecionarIngredientes {

  public ingredientes: any[] = [];
  public filtroIngredientes: any[] = [];
  public ingredienteSelecionados: any[] = [];
  public parametroPesquisa = '';
  public errorMsg: any;
  item: string = '';

  constructor(private http: HttpClient, private router: Router) {

    this.getIngredientes();

  }

  getIngredientes(){
    const httpJson = this.http.get<any>('././assets/jsons/ingredientes.json');

    httpJson.subscribe(data => {
      this.ingredientes = data;
    }, error => {
      this.errorMsg = error;
    });
  }

  filtrarIngredientes(param){
    this.parametroPesquisa = param;
    if (param === '') {
      this.filtroIngredientes = [];
    } else {
      this.filtroIngredientes = this.ingredientes.filter(element  => {
        return element.toLowerCase().startsWith(param.toLowerCase());
      });
    }
  }

  selecionarIngrediente(ingrediente, index){
    this.item = 'selecionar';
    this.ingredienteSelecionados.push(ingrediente);
    this.filtroIngredientes.splice(index, 1);
    this.ingredientes.splice(index, 1);
  }

  removerIngrediente(ingrediente, index) {
    this.item = 'excluir';
    this.ingredientes.splice(ingrediente.id - 1, 0, ingrediente);
    if (ingrediente.toLowerCase().startsWith(this.parametroPesquisa.toLowerCase())) {
      this.filtroIngredientes.splice(index, 0, ingrediente);
    }
    this.ingredienteSelecionados.splice(index, 1);
  }

  

  public async buscarReceitas() {
    if(this.ingredienteSelecionados.length == 0){
      alert('Selecione pelo menos um ingrediente');
    } else {

      const httpJson = this.http.get<any>('././assets/jsons/receitas.json');
      let receitasFind = [];
      
      let qtsIngrediente;

      await httpJson.subscribe(async data =>  {
        
        for (const receita of data) {

          qtsIngrediente = this.ingredienteSelecionados.length;

          for (const ingrediente of this.ingredienteSelecionados) {

              for (const ingredientesReceita of receita.secao[0].conteudo) {

              if (await ingredientesReceita.indexOf(ingrediente) > -1) {

                qtsIngrediente--;
                if(qtsIngrediente <= 0) {
                  receitasFind.push(receita);
                }

              }
            }
          }
        };

        
      if(receitasFind.length > 0){
        this.router.navigate(['/listaDeReceitas', {ingredientes: JSON.stringify(this.ingredienteSelecionados), receitas: JSON.stringify(receitasFind)}]);
      } else {
        alert('Nada encontrado');
      }

      
      }, error => {
        this.errorMsg = error;
        receitasFind = []; 
      });
    }
  }

}

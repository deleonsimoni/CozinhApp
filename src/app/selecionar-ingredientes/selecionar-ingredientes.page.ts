import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { trigger, style, state, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-ingredientes',
  templateUrl: './selecionar-ingredientes.page.html',
  styleUrls: ['./selecionar-ingredientes.page.scss'],
})
export class SelecionarIngredientesPage {

  public ingredientes: any[] = [];
  public filtroIngredientes: any[] = [];
  public ingredienteSelecionados: any[] = [];
  public parametroPesquisa = '';
  public errorMsg: any;
  item = '';

  constructor(private http: HttpClient, private router: Router) {

    this.getIngredientes();

  }

  getIngredientes(){
    const httpJson = this.http.get<any>('././assets/jsons/ingredientes.json');

    httpJson.subscribe(data => {
      this.ingredientes = data.ingredientes;
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
        return element.nome.toLowerCase().startsWith(param.toLowerCase());
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
    if (ingrediente.nome.toLowerCase().startsWith(this.parametroPesquisa.toLowerCase())) {
      this.filtroIngredientes.splice(index, 0, ingrediente);
    }
    this.ingredienteSelecionados.splice(index, 1);
  }

  public buscarReceitas() {
    if (this.ingredienteSelecionados.length === 0) {
      alert('Selecione pelo menos um ingrediente');
    } else {
      this.router.navigate(['/lista-de-receitas', {ingredientes: JSON.stringify(this.ingredienteSelecionados)}]);
    }
  }

}

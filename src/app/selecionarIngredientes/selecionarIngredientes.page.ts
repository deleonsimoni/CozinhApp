import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'selecionarIngredientes.page.html',
  styleUrls: ['selecionarIngredientes.page.scss'],
})
export class SelecionarIngredientes {

  public ingredientes:any[] = [];
  public filtroIngredientes:any[] = [];
  public ingredienteSelecionados:any[] = [];
  public parametroPesquisa:string = "";

  public errorMsg;

  constructor(private http: HttpClient) {

    this.getIngredientes();

  }
  
  getIngredientes(){
        const httpJson = this.http.get<any>("././assets/jsons/ingredientes.json")
        
        httpJson.subscribe(data => {
                                      this.ingredientes = data.ingredientes;
                                    },

                           error => { 
                                      this.errorMsg = error;
                                    }
                          )
  }

  filtrarIngredientes(param){
    this.parametroPesquisa = param;
    if(param == ""){
      this.filtroIngredientes = [];
    } else {
      this.filtroIngredientes = this.ingredientes.filter(element  => {
        return element.nome.toLowerCase().startsWith(param.toLowerCase());
      });

    }
  }

  selecionarIngrediente(ingrediente, index){
    this.ingredienteSelecionados.push(ingrediente);
    this.filtroIngredientes.splice(index, 1);
    this.ingredientes.splice(index, 1);
  }

  removerIngrediente(ingrediente, index){
    this.ingredientes.splice(ingrediente.id-1,0,ingrediente);
    if(ingrediente.nome.toLowerCase().startsWith(this.parametroPesquisa.toLowerCase())){
      this.filtroIngredientes.splice(ingrediente.id-1,0,ingrediente);
    }
    this.ingredienteSelecionados.splice(index, 1);
  }

  public alerta() {
    alert('ó o lee ae!');
  }
}

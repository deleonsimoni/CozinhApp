import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-receitas',
  templateUrl: './lista-de-receitas.page.html',
  styleUrls: ['./lista-de-receitas.page.scss'],
})
export class ListaDeReceitasPage implements OnInit {

  public ingredientes: any[] = [];

  constructor(private http: HttpClient, private router: Router, private active: ActivatedRoute) {
    
    if(active.snapshot.params.ingredientes){
      this.ingredientes = JSON.parse(active.snapshot.params.ingredientes);
    }

   }

   
  detalharReceita(){
    this.router.navigate(['/detalharReceita']);
  }


  ngOnInit() {


  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../utils/loading.service';

@Component({
  selector: 'app-lista-de-receitas',
  templateUrl: './lista-de-receitas.page.html',
  styleUrls: ['./lista-de-receitas.page.scss'],
})
export class ListaDeReceitasPage implements OnInit {

  public ingredientes: any[] = [];
  public receitas;

  constructor(private http: HttpClient, private router: Router, private active: ActivatedRoute,  private loading: LoadingService) {
    this.loading.present()
    setTimeout(() => {
      this.loading.dismiss()

    }, 4000000);
    if(active.snapshot.params.ingredientes){
      this.ingredientes = JSON.parse(active.snapshot.params.ingredientes);
      this.receitas = JSON.parse(active.snapshot.params.receitas);

    }

   }

   
  detalharReceita(){
    this.router.navigate(['/detalharReceita']);
  }


  ngOnInit() {


  }

}

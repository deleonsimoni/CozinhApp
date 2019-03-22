import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListaDeReceitas } from './listaDeReceitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListaDeReceitas
      }
    ])
  ],
  declarations: [ListaDeReceitas]
})
export class ListaDeReceitasModule {}

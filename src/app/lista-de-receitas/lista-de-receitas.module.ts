import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeReceitasPage } from './lista-de-receitas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeReceitasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeReceitasPage]
})
export class ListaDeReceitasPageModule {}

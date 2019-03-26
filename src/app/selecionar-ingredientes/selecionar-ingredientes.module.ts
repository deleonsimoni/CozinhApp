import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelecionarIngredientesPage } from './selecionar-ingredientes.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarIngredientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelecionarIngredientesPage]
})
export class SelecionarIngredientesPageModule {}

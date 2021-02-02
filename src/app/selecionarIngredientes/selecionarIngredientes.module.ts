import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';

import { SelecionarIngredientes } from './selecionarIngredientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxLoadingModule.forRoot({}),
    RouterModule.forChild([
      {
        path: '',
        component: SelecionarIngredientes
      }
    ])
  ],
  declarations: [SelecionarIngredientes]
})
export class SelecionarIngredientesModule {}

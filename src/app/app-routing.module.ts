import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'detalhar-receita',
    loadChildren: './detalhar-receita/detalhar-receita.module#DetalharReceitaPageModule'
  },
  {
    path: 'lista-de-receitas',
    loadChildren: './lista-de-receitas/lista-de-receitas.module#ListaDeReceitasPageModule'
  },
  {
    path: 'selecionar-ingredientes',
    loadChildren: './selecionar-ingredientes/selecionar-ingredientes.module#SelecionarIngredientesPageModule'
  },
  {
    path: 'splash',
    loadChildren: './splash/splash.module#SplashPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

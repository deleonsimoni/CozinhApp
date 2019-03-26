import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'home', loadChildren: './selecionarIngredientes/selecionarIngredientes.module#SelecionarIngredientesModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'listaDeReceitas', loadChildren: './lista-de-receitas/lista-de-receitas.module#ListaDeReceitasPageModule' },
  { path: 'detalharReceita', loadChildren: './detalhar-receita/detalhar-receita.module#DetalharReceitaPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

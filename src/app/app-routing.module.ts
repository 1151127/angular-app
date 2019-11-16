import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { OperacoesComponent } from './pages/operacoes/operacoes.component';
import { MaquinasComponent } from './pages/maquinas/maquinas.component';
import { LinhasProducaoComponent } from './pages/linhas-producao/linhas-producao.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'linhas-producao', component: LinhasProducaoComponent},
  {path: 'maquinas', component: MaquinasComponent},
  {path: 'operacoes', component: OperacoesComponent},
  {path: 'produtos', component: ProdutosComponent},
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

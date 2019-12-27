import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { OperacoesComponent } from './pages/operacoes/operacoes.component';
import { MaquinasComponent } from './pages/maquinas/maquinas.component';
import { LinhasProducaoComponent } from './pages/linhas-producao/linhas-producao.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistarUserComponent } from './pages/registar-user/registar-user.component';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';
import { EncomendaListComponent } from './pages/encomenda-list/encomenda-list.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'linhas-producao', component: LinhasProducaoComponent},
  {path: 'maquinas', component: MaquinasComponent},
  {path: 'operacoes', component: OperacoesComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registarUser', component: RegistarUserComponent},
  {path: 'encomendas', component: EncomendasComponent},
  {path: 'encomendas-list', component: EncomendaListComponent},
  {path: 'user-profile', component: UserProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

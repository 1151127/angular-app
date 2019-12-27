import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule, MatTableModule, MatListModule } from '@angular/material';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { GenericHeaderComponent } from './components/generic-header/generic-header.component';
import { ComponentsModule } from './components/components.module';
import { LinhasProducaoComponent } from './pages/linhas-producao/linhas-producao.component';
import { MaquinasComponent } from './pages/maquinas/maquinas.component';
import { OperacoesComponent } from './pages/operacoes/operacoes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistarUserComponent } from './pages/registar-user/registar-user.component';
import { BuyItemComponent } from './components/buy-item/buy-item.component';
import { EncomendaListComponent } from './pages/encomenda-list/encomenda-list.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinhasProducaoComponent,
    MaquinasComponent,
    OperacoesComponent,
    ProdutosComponent,
    OperacoesComponent,
    ProdutosComponent,
    EncomendasComponent,
    EncomendaListComponent,
    LoginComponent,
    RegistarUserComponent,
    EncomendaListComponent,
    UserProfileComponent,
  ],
  imports: [
    HttpClientModule,
    ComponentsModule,
    DragDropModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
     BuyItemComponent,
     MyDialogComponent,
     ShowDataComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

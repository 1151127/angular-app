import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule, MatTableModule } from '@angular/material';
import { GenericHeaderComponent } from './components/generic-header/generic-header.component';
import { ComponentsModule } from './components/components.module';
import { LinhasProducaoComponent } from './pages/linhas-producao/linhas-producao.component';
import { MaquinasComponent } from './pages/maquinas/maquinas.component';
import { OperacoesComponent } from './pages/operacoes/operacoes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';

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
  ],
  imports: [
    HttpClientModule,
    ComponentsModule,
    DragDropModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

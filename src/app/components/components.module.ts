import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericHeaderComponent } from './generic-header/generic-header.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';



@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    GenericHeaderComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GenericHeaderComponent,
  ],
  providers: [
  ]
})

export class ComponentsModule {}

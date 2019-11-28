import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericHeaderComponent } from './generic-header/generic-header.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatToolbarModule, MatIconModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatFormFieldModule, MatSelectModule, MatListModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { ShowDataComponent } from './show-data/show-data.component';



@NgModule({
  imports: [
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
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
    MyDialogComponent,
    ShowDataComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GenericHeaderComponent,
    MyDialogComponent,
    ShowDataComponent,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})

export class ComponentsModule {}

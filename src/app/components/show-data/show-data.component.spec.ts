import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatListModule} from '@angular/material/list';
import { ShowDataComponent } from './show-data.component';
import {MatDialogModule,MatDialogRef} from '@angular/material';
import { MaquinasComponent } from '../../pages/maquinas/maquinas.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material'  ;
import { Maquina } from '../../models/maquina/maquina' ; 

describe('ShowDataComponent', () => {
  let component: ShowDataComponent;
  let fixture: ComponentFixture<ShowDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataComponent,MaquinasComponent ],
      imports: [MatListModule,MatIconModule,MatTableModule,MatSelectModule,FormsModule,MatDialogModule,MatFormFieldModule],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  });  */
});

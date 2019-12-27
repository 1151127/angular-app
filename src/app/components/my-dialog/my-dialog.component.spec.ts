import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MyDialogComponent } from './my-dialog.component';
import {MatDialogModule,MatDialogRef} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MaquinasComponent } from '../../pages/maquinas/maquinas.component';
import { MatTableModule } from '@angular/material' ; 


describe('MyDialogComponent', () => {
  let component: MyDialogComponent;
  let fixture: ComponentFixture<MyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogComponent,MaquinasComponent ],
      imports: [MatFormFieldModule,MatTableModule,MatDialogModule,MatIconModule,FormsModule,MatSelectModule],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});

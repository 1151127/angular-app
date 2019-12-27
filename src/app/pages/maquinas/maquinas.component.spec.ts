import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinasComponent } from './maquinas.component';
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MaquinasComponent', () => {
  let component: MaquinasComponent;
  let fixture: ComponentFixture<MaquinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinasComponent ],
      imports: [ BrowserAnimationsModule,MatIconModule ,MatDialogModule, MatTableModule , HttpClientModule, FormsModule , MatFormFieldModule , MatSelectModule , MatInputModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

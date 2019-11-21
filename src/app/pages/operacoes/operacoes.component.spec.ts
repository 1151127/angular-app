import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule,MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule, MatTableModule } from '@angular/material';
import { OperacoesComponent } from './operacoes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('OperacoesComponent', () => {
  let component: OperacoesComponent;
  let fixture: ComponentFixture<OperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesComponent ],
      imports: [ MatIconModule , MatTableModule,  HttpClientModule, FormsModule , MatFormFieldModule , MatSelectModule , MatInputModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

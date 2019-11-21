import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule,MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule, MatTableModule } from '@angular/material';
import { LinhasProducaoComponent } from './linhas-producao.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LinhasProducaoComponent', () => {
  let component: LinhasProducaoComponent;
  let fixture: ComponentFixture<LinhasProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasProducaoComponent ],
      imports: [ MatIconModule , HttpClientModule, FormsModule , MatFormFieldModule , MatSelectModule , MatInputModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhasProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

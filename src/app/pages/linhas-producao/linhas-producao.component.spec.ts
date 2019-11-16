import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasProducaoComponent } from './linhas-producao.component';

describe('LinhasProducaoComponent', () => {
  let component: LinhasProducaoComponent;
  let fixture: ComponentFixture<LinhasProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasProducaoComponent ]
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

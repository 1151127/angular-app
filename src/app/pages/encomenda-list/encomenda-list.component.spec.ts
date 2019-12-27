import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaListComponent } from './encomenda-list.component';

describe('EncomendaListComponent', () => {
  let component: EncomendaListComponent;
  let fixture: ComponentFixture<EncomendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule, MatTableModule } from '@angular/material';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ] ,
      imports: [ MatIconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

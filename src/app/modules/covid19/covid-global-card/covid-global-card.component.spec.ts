import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGlobalCardComponent } from './covid-global-card.component';

describe('CovidGlobalCardComponent', () => {
  let component: CovidGlobalCardComponent;
  let fixture: ComponentFixture<CovidGlobalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidGlobalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGlobalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

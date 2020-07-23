import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidByCountryComponent } from './covid-by-country.component';

describe('CovidByCountryComponent', () => {
  let component: CovidByCountryComponent;
  let fixture: ComponentFixture<CovidByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

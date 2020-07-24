import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetMainPageComponent } from './budget-main-page.component';

describe('BudgetMainPageComponent', () => {
  let component: BudgetMainPageComponent;
  let fixture: ComponentFixture<BudgetMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

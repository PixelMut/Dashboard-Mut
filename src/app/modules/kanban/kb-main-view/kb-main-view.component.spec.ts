import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbMainViewComponent } from './kb-main-view.component';

describe('KbMainViewComponent', () => {
  let component: KbMainViewComponent;
  let fixture: ComponentFixture<KbMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

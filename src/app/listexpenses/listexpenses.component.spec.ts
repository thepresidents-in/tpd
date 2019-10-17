import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexpensesComponent } from './listexpenses.component';

describe('ListexpensesComponent', () => {
  let component: ListexpensesComponent;
  let fixture: ComponentFixture<ListexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeReceiptComponent } from './college-receipt.component';

describe('CollegeReceiptComponent', () => {
  let component: CollegeReceiptComponent;
  let fixture: ComponentFixture<CollegeReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

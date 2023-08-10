import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDiscountsComponent } from './best-discounts.component';

describe('BestDiscountsComponent', () => {
  let component: BestDiscountsComponent;
  let fixture: ComponentFixture<BestDiscountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestDiscountsComponent]
    });
    fixture = TestBed.createComponent(BestDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

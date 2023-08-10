import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouForPurchaesComponent } from './thank-you-for-purchaes.component';

describe('ThankYouForPurchaesComponent', () => {
  let component: ThankYouForPurchaesComponent;
  let fixture: ComponentFixture<ThankYouForPurchaesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThankYouForPurchaesComponent]
    });
    fixture = TestBed.createComponent(ThankYouForPurchaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

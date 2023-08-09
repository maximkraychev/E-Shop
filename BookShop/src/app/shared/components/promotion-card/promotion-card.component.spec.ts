import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionCardComponent } from './promotion-card.component';

describe('PromotionCardComponent', () => {
  let component: PromotionCardComponent;
  let fixture: ComponentFixture<PromotionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionCardComponent]
    });
    fixture = TestBed.createComponent(PromotionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

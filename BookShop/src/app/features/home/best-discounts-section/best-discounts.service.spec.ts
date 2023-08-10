import { TestBed } from '@angular/core/testing';

import { BestDiscountsService } from './best-discounts.service';

describe('BestDiscountsService', () => {
  let service: BestDiscountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestDiscountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

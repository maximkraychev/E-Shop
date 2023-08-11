import { TestBed } from '@angular/core/testing';

import { FinalizeOrderService } from './finalize-order.service';

describe('FinalizeOrderService', () => {
  let service: FinalizeOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalizeOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShopingCartManagerService } from './shopping-cart-manager.service';

describe('ShopingCardManagerService', () => {
  let service: ShopingCartManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingCartManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

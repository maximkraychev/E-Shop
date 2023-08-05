import { TestBed } from '@angular/core/testing';

import { ErrorPopupService } from './error-popup.service';

describe('ErrorPopupService', () => {
  let service: ErrorPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

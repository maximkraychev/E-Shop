import { TestBed } from '@angular/core/testing';

import { InputsHandleService } from './inputs-handle.service';

describe('InputsHandleService', () => {
  let service: InputsHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputsHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

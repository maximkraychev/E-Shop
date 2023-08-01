import { TestBed } from '@angular/core/testing';

import { FirebaseCRUTService } from './firebase-crut.service';

describe('FirebaseCRUTService', () => {
  let service: FirebaseCRUTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCRUTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

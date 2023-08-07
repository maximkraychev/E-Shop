import { TestBed } from '@angular/core/testing';

import { GetDataPaginationService } from './get-data-pagination.service';

describe('GetDataPaginationService', () => {
  let service: GetDataPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UploadBookService } from './upload-book.service';

describe('UploadBookService', () => {
  let service: UploadBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

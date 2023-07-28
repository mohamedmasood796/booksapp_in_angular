import { TestBed } from '@angular/core/testing';

import { BookApiServiceService } from './book-api-service.service';

describe('BookApiServiceService', () => {
  let service: BookApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

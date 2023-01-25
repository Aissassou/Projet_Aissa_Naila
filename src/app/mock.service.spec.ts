import { TestBed } from '@angular/core/testing';

import { mockService } from './mock.service';

describe('ServiceService', () => {
  let service: mockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(mockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

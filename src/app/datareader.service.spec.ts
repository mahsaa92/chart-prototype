import { TestBed } from '@angular/core/testing';

import { DatareaderService } from './datareader.service';

describe('DatareaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatareaderService = TestBed.get(DatareaderService);
    expect(service).toBeTruthy();
  });
});

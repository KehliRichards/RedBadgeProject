import { TestBed } from '@angular/core/testing';

import { HuntLocationService } from './hunt-location.service';

describe('HuntLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HuntLocationService = TestBed.get(HuntLocationService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SharedBreedsService } from './shared-breeds.service';

describe('SharedBreedsService', () => {
  let service: SharedBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoadProgressService } from './load-progress.service';

describe('LoadProgressService', () => {
  let service: LoadProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

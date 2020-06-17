import { TestBed } from '@angular/core/testing';

import { LoginfactroryService } from './loginfactrory.service';

describe('LoginfactroryService', () => {
  let service: LoginfactroryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginfactroryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

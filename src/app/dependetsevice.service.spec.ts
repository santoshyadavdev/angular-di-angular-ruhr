import { TestBed } from '@angular/core/testing';

import { DependetseviceService } from './dependetsevice.service';

describe('DependetseviceService', () => {
  let service: DependetseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependetseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

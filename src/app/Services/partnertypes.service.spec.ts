import { TestBed } from '@angular/core/testing';

import { PartnertypesService } from './partnertypes.service';

describe('PartnertypesService', () => {
  let service: PartnertypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnertypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

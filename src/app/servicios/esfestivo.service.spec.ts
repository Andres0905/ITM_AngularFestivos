import { TestBed } from '@angular/core/testing';

import { EsfestivoService } from './esfestivo.service';

describe('EsfestivoService', () => {
  let service: EsfestivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsfestivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

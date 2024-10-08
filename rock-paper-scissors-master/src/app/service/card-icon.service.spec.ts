import { TestBed } from '@angular/core/testing';

import { CardIconService } from './card-icon.service';

describe('CardIconService', () => {
  let service: CardIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

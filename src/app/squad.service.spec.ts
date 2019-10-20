import { TestBed } from '@angular/core/testing';

import { SquadService } from './squad.service';

describe('SquadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SquadService = TestBed.get(SquadService);
    expect(service).toBeTruthy();
  });
});

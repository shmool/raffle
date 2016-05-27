import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RaffleService } from './raffle.service.ts';

describe('Raffle Service', () => {
  beforeEachProviders(() => [RaffleService]);

  it('should ...',
      inject([RaffleService], (service: RaffleService) => {
    expect(service).toBeTruthy();
  }));
});

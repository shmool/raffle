import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RaffleAppComponent } from '../app/raffle.component';

beforeEachProviders(() => [RaffleAppComponent]);

describe('App: Raffle', () => {
  it('should create the app',
      inject([RaffleAppComponent], (app: RaffleAppComponent) => {
    expect(app).toBeTruthy();
  }));
  
});

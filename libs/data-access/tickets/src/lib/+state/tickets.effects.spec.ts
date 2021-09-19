import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TicketsEffects } from './tickets.effects';
import * as TicketsActions from './tickets.actions';

describe('TicketsEffects', () => {
  let actions: Observable<any>;
  let effects: TicketsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TicketsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TicketsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TicketsActions.init() });

      const expected = hot('-a-|', {
        a: TicketsActions.loadTicketsSuccess({ tickets: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

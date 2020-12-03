import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { EmployeesEffects } from './employees.effects';
import * as EmployeesActions from './employees.actions';

describe('EmployeesEffects', () => {
  let actions: Observable<any>;
  let effects: EmployeesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        EmployeesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(EmployeesEffects);
  });

  describe('loadEmployees$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: EmployeesActions.loadEmployees() });

      const expected = hot('-a-|', {
        a: EmployeesActions.loadEmployeesSuccess({ employees: [] }),
      });

      expect(effects.loadEmployees$).toBeObservable(expected);
    });
  });
});

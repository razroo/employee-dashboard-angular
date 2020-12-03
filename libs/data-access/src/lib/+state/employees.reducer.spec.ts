import { EmployeesEntity } from './employees.models';
import * as EmployeesActions from './employees.actions';
import { State, initialState, reducer } from './employees.reducer';

describe('Employees Reducer', () => {
  const createEmployeesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EmployeesEntity);

  beforeEach(() => {});

  describe('valid Employees actions', () => {
    it('loadEmployeesSuccess should return set the list of known Employees', () => {
      const employees = [
        createEmployeesEntity('PRODUCT-AAA'),
        createEmployeesEntity('PRODUCT-zzz'),
      ];
      const action = EmployeesActions.loadEmployeesSuccess({ employees });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

import { EmployeesEntity } from './employees.models';
import { State, employeesAdapter, initialState } from './employees.reducer';
import * as EmployeesSelectors from './employees.selectors';

describe('Employees Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEmployeesId = (it) => it['id'];
  const createEmployeesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EmployeesEntity);

  let state;

  beforeEach(() => {
    state = {
      employees: employeesAdapter.setAll(
        [
          createEmployeesEntity('PRODUCT-AAA'),
          createEmployeesEntity('PRODUCT-BBB'),
          createEmployeesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Employees Selectors', () => {
    it('getAllEmployees() should return the list of Employees', () => {
      const results = EmployeesSelectors.getAllEmployees(state);
      const selId = getEmployeesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = EmployeesSelectors.getSelected(state);
      const selId = getEmployeesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getEmployeesLoaded() should return the current 'loaded' status", () => {
      const result = EmployeesSelectors.getEmployeesLoaded(state);

      expect(result).toBe(true);
    });

    it("getEmployeesError() should return the current 'error' state", () => {
      const result = EmployeesSelectors.getEmployeesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

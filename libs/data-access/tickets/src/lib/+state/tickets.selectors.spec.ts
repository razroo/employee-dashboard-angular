import { TicketsEntity } from './tickets.models';
import {
  ticketsAdapter,
  TicketsPartialState,
  initialState,
} from './tickets.reducer';
import * as TicketsSelectors from './tickets.selectors';

describe('Tickets Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTicketsId = (it: TicketsEntity) => it.id;
  const createTicketsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TicketsEntity);

  let state: TicketsPartialState;

  beforeEach(() => {
    state = {
      tickets: ticketsAdapter.setAll(
        [
          createTicketsEntity('PRODUCT-AAA'),
          createTicketsEntity('PRODUCT-BBB'),
          createTicketsEntity('PRODUCT-CCC'),
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

  describe('Tickets Selectors', () => {
    it('getAllTickets() should return the list of Tickets', () => {
      const results = TicketsSelectors.getAllTickets(state);
      const selId = getTicketsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TicketsSelectors.getSelected(state) as TicketsEntity;
      const selId = getTicketsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getTicketsLoaded() should return the current 'loaded' status", () => {
      const result = TicketsSelectors.getTicketsLoaded(state);

      expect(result).toBe(true);
    });

    it("getTicketsError() should return the current 'error' state", () => {
      const result = TicketsSelectors.getTicketsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

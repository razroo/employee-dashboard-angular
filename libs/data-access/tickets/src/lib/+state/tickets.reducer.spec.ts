import { TicketsEntity } from './tickets.models';
import * as TicketsActions from './tickets.actions';
import { State, initialState, reducer } from './tickets.reducer';

describe('Tickets Reducer', () => {
  const createTicketsEntity = (id: string, name = ''): TicketsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Tickets actions', () => {
    it('loadTicketsSuccess should return set the list of known Tickets', () => {
      const tickets = [
        createTicketsEntity('PRODUCT-AAA'),
        createTicketsEntity('PRODUCT-zzz'),
      ];
      const action = TicketsActions.loadTicketsSuccess({ tickets });

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

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminPage state domain
 */

const selectState = (state) => state.adminPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdminPage
 */

export const makeSelectAdminPage = () =>
  createSelector(selectState, (state) => state);

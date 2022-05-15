import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the component state domain
 */

const selectState = (state) => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Component
 */

export const makeSelectComponent = () =>
  createSelector(selectState, (state) => state);

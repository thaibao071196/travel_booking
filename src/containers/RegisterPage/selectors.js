import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerPage state domain
 */

const selectState = (state) => state.registerPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterPage
 */

export const makeSelectRegisterPage = () =>
  createSelector(selectState, (state) => state);

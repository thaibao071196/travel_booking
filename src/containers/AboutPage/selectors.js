import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectState = (state) => state.aboutPage || initialState;

export const makeSelectStatusReducer = () =>
  createSelector(selectState, (state) => state.statusReducer);

export const makeSelectStatusSaga = () =>
  createSelector(selectState, (state) => state.statusSaga);

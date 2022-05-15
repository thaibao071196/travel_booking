/*
 *
 * Component reducer
 *
 */
import produce from 'immer';
import { loginActions } from '../actions';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const componentReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case loginActions.SUCCESS:
        console.log('success validate');
        console.log(action.payload);
        break;
    }
  });

export default componentReducer;

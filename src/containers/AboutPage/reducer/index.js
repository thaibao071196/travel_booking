/* eslint-disable no-param-reassign */
import produce from 'immer';
import { testActions } from '../actions';

export const initialState = {
  statusReducer: null,
  statusSaga: null,
};

const aboutPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case testActions.SUCCESS_REDUCER:
        draft.statusReducer = action.payload.status;
        break;
      case testActions.SUCCESS_SAGA:
        draft.statusSaga = action.payload.status;
    }
  });

export default aboutPageReducer;

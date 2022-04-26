/* eslint-disable no-param-reassign */
import produce from 'immer';
import { DEFAULT, SAGA_TYPE } from '../constants';

export const initialState = {
  statusReducer: null,
  statusSaga: null,
};

const aboutPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case DEFAULT:
        draft.statusReducer = action.payload.status;
        break;
      case SAGA_TYPE:
        draft.statusSaga = action.payload;
    }
  });

export default aboutPageReducer;

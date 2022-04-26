/* eslint-disable no-param-reassign */
import produce from 'immer';
import { DEFAULT } from '../constants';

export const initialState = {
  init: {},
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case DEFAULT:
        draft.init = {};
        break;
    }
  });

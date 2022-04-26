import { DEFAULT, SAGA_DEFAULT, SAGA_TYPE } from './constants';

export const testReducerAction = (payload) => ({
  type: DEFAULT,
  payload,
});

export const testSagaAction = (payload) => ({
  type: SAGA_DEFAULT,
  payload,
});

export const testSaga = (payload) => ({
  type: SAGA_TYPE,
  payload,
});

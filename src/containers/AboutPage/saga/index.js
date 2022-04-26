import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { SAGA_DEFAULT } from '../constants';

import { testSaga } from '../actions';

function* onActiveTestSaga(payload) {
  const { status } = payload.payload;
  try {
    yield put(testSaga(status));
  } catch {
    // erorr
  }
}

export default function* appSaga() {
  yield takeLatest(SAGA_DEFAULT, onActiveTestSaga);
}

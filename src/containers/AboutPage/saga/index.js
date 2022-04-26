import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { testActions } from '../actions';

function* onActiveTestSaga({ payload }) {
  const { status } = payload;
  try {
    yield put(testActions.successSaga({ status }));
  } catch {
    // error
  }
}

export default function* appSaga() {
  yield takeLatest(testActions.TRIGGER_TO_SAGA, onActiveTestSaga);
}

import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loginActions } from '../actions';
import RepositoryFactory from '../../../repositories/RepositoryFactory';

const loginRepository = RepositoryFactory.get('login');
function* onLoginSaga({ payload }) {
  try {
    const { value } = payload;
    const response = yield call(loginRepository.checkLogin, {
      email: value.email,
      password: value.password,
    });

    yield put(loginActions.success(response));
  } catch {
    alert('asasas');
  }
}

// Individual exports for testing
export default function* loginSaga() {
  yield takeLatest(loginActions.TRIGGER, onLoginSaga);
}

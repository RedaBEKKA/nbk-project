import * as type from '../types';

import { put, takeEvery } from 'redux-saga/effects';
import { getAppToken, login } from 'api/auth';

function* handleLogout() {
  yield takeEvery({ type: type.LOGOUT });
}
function* handleLogin(values) {
  console.log(values);
  try {
    const data = yield login(values.payload);
    console.log(data);
    yield takeEvery({ type: type.LOGIN, payload: data });
  } catch (error) {
    console.log(error);
  }
}
function* handleGetAppToken() {
  try {
    const data = yield getAppToken();
    yield put({ type: type.SET_APP_TOKEN, payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* authSaga() {
  yield takeEvery(type.LOGOUT, handleLogout);
  yield takeEvery(type.LOGIN, handleLogin);
  yield takeEvery(type.GET_APP_TOKEN, handleGetAppToken);
}

export default authSaga;

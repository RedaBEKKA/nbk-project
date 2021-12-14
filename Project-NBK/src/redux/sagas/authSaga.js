import * as type from '../types/authTypes';

import { call, put, takeEvery } from 'redux-saga/effects';
import { getAppToken, login, forgetPassword, confirmForgetPassword } from '../../api/auth';

function* handleLogout() {
  yield put({ type: type.LOGOUT });
}

function* handleLogin(values) {
  console.log("values",values);
  yield put({ type: type.AUTH_LOADING });
  const { response, error } = yield call(login, values.payload);
  if (response) yield put({ type: type.LOGIN, payload: response.data });
  else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}
function* handleForgetPassword(values) {
  yield put({ type: type.AUTH_LOADING });
  const { response, error } = yield call(forgetPassword, values.payload.email);
  if (response) {
    yield put({ type: type.FORGET_SUCCESS, payload: response.data });
    yield put({ type: 'REDIRECT', payload: '/confirmReset' });
  } else yield put({ type: type.FORGET_FAILED, payload: error.response });
}
function* handleConfirmReset(values) {
  yield put({ type: type.AUTH_LOADING });
  const { response, error } = yield call(confirmForgetPassword, values.payload);
  if (response) {
    yield put({ type: type.RESET_SUCCESS, payload: response.data });
    yield put({ type: 'REDIRECT', payload: '/login' });
  } else yield put({ type: type.RESET_FAILED, payload: error.response });
}
function* handleGetAppToken() {
  yield put({ type: type.AUTH_LOADING });
  try {
    const res = yield getAppToken();
    
    yield put({ type: type.SET_APP_TOKEN, payload: res.response });
  } catch (error) {
    console.log(error);
  }
}

function* authSaga() {
  yield takeEvery(type.RESET_REQUEST, handleConfirmReset);
  yield takeEvery(type.FORGET_REQUEST, handleForgetPassword);
  yield takeEvery(type.LOGOUT_REQUEST, handleLogout);
  yield takeEvery(type.LOGIN_REQUEST, handleLogin);
  yield takeEvery(type.GET_APP_TOKEN_REQUEST, handleGetAppToken);
}

export default authSaga;

import jwtDecode from 'jwt-decode';

import * as type from '../types/authTypes';

import { call, put, takeEvery } from 'redux-saga/effects';
import { getAppToken, login, forgetPassword, confirmForgetPassword } from '../../api/auth';

function* loadInitialActions(values) {
  var dateNow = new Date();
  console.log('initail load ');
  console.log(values);

  if (values?.payload && jwtDecode(values?.payload).exp * 1000 < dateNow.getTime()) {
    yield put({ type: type.LOGOUT });
  }
}

function* handleLogout() {
  yield put({ type: type.LOGOUT });
}

function* handleLogin(values) {
  console.log(values);
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
  yield takeEvery(type.INITIAL_LOAD_REQUEST, loadInitialActions);
}

export default authSaga;

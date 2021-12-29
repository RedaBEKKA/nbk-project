import * as type from '../types/registrationTypes';

import { call, put, takeEvery } from 'redux-saga/effects';
// import { getAppToken, login, forgetPassword, confirmForgetPassword } from '../../api/auth';
import { Register } from '../../api/register';

// function* handleLogout() {
//   yield put({ type: type.LOGOUT });
// }

function* handleRegister(values) {
  console.log("Registervalues",values);
  yield put({ type: type.REGISTER_LOADING });
  const { response, error } = yield call(Register, values.payload);
  if (response) yield put({ type: type.REGISTER, payload: response.data });
  else yield put({ type: type.REGISTER_FAILED, payload: error.response });
}

// function* handleForgetPassword(values) {
//   yield put({ type: type.AUTH_LOADING });
//   const { response, error } = yield call(forgetPassword, values.payload.email);
//   if (response) {
//     yield put({ type: type.FORGET_SUCCESS, payload: response.data });
//     yield put({ type: 'REDIRECT', payload: '/confirmReset' });
//   } else yield put({ type: type.FORGET_FAILED, payload: error.response });
// }
// function* handleConfirmReset(values) {
//   yield put({ type: type.AUTH_LOADING });
//   const { response, error } = yield call(confirmForgetPassword, values.payload);
//   if (response) {
//     yield put({ type: type.RESET_SUCCESS, payload: response.data });
//     yield put({ type: 'REDIRECT', payload: '/login' });
//   } else yield put({ type: type.RESET_FAILED, payload: error.response });
// }
// function* handleGetAppToken() {
//   yield put({ type: type.AUTH_LOADING });
//   try {
//     const res = yield getAppToken();
//     yield put({ type: type.SET_APP_TOKEN, payload: res.response });
//   } catch (error) {
//     console.log(error);
//   }
// }

function* registerSaga() {
//   yield takeEvery(type.RESET_REQUEST, handleConfirmReset);
//   yield takeEvery(type.FORGET_REQUEST, handleForgetPassword);
//   yield takeEvery(type.LOGOUT_REQUEST, handleLogout);
  yield takeEvery(type.REGISTER_REQUEST, handleRegister);
//   yield takeEvery(type.GET_APP_TOKEN_REQUEST, handleGetAppToken);
}

export default registerSaga;

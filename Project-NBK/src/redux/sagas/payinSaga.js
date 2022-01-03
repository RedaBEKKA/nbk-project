import * as type from '../types/payinsTypes';

import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllPayins, getFilteredPayins, getSinglePayin, deletePayin } from 'api/payins';

function* handleGetAllPayins(values) {
  yield put({ type: type.GET_PAYINS_LOADING });

  const { response, error } = yield call(getAllPayins);
  console.log('response', response);
  console.log('error', error);
  if (response) yield put({ type: type.SET_PAYINS, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}
function* handleSetPayinInfo(values) {
  yield put({ type: type.SET_PAYIN_INFO, payload: values.payload });
}
function* handleGetFilterPayins(values) {
  console.log(values);
  yield put({ type: type.GET_PAYINS_LOADING });

  const { response, error } = yield call(getFilteredPayins, values.payload);
  console.log('response', response);
  console.log('error', error);
  if (response) yield put({ type: type.SET_PAYINS, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}
function* handleGetSinglePayin(values) {
  console.log(values);
  yield put({ type: type.GET_SINGLE_PAYIN_LOADING });
  const { response, error } = yield call(getSinglePayin, values.payload);
  console.log('response', response);
  console.log('error', error);
  if (response) yield put({ type: type.SET_PAYIN, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}

function* payinSaga() {
  yield takeEvery(type.GET_PAYINS_REQUEST, handleGetAllPayins);
  yield takeEvery(type.GET_SINGLE_PAYIN_REQUEST, handleGetSinglePayin);
  yield takeEvery(type.FILTER_PAYINS_REQUEST, handleGetFilterPayins);
  yield takeEvery(type.SET_PAYIN_INFO_REQUEST, handleSetPayinInfo);
}

export default payinSaga;

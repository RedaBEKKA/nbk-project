import * as type from '../types/payinsTypes';
import * as deleteDialogeType from '../types/deleteDialogeTypes';

import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllPayins, getFilteredPayins, getSinglePayin, deletePayin } from 'api/payins';

function* handleGetAllPayins(values) {
  if (values.payload.loading) {
    yield put({ type: type.GET_PAYINS_LOADING });
  }

  const { response, error } = yield call(getAllPayins);
  console.log('response', response);
  console.log('error', error);
  if (response) yield put({ type: type.SET_PAYINS, payload: response.data });
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
}
function* handleGetSinglePayin(values) {
  console.log(values);
  yield put({ type: type.GET_SINGLE_PAYIN_LOADING });
  const { response, error } = yield call(getSinglePayin, values.payload);
  console.log('response', response);
  console.log('error', error);
  if (response) yield put({ type: type.SET_PAYIN, payload: response.data });
}
function* handleDeletePayin(values) {
  console.log(values);
  yield put({ type: type.RESET_PAYINS_ERRORS });
  yield put({ type: type.DELETE_PAYIN_LOADING_ON });
  const { response } = yield call(deletePayin, values.payload);
  console.log('response', response);

  if (response.data.status === 'success') {
    yield put({ type: type.GET_PAYINS_REQUEST, payload: { loading: true } });
    yield put({ type: type.DELETE_PAYIN_LOADING_OFF });
    yield put({ type: deleteDialogeType.CLOSE_DELETE_DIALOGE });
  } else if (response.data.status === 'error') {
    yield put({ type: type.DELETE_PAYIN_LOADING_OFF });
    yield put({ type: type.SET_PAYINS_ERRORS, payload: response?.data?.StatusDescription?.errors });
  }
}

function* payinSaga() {
  yield takeEvery(type.GET_PAYINS_REQUEST, handleGetAllPayins);
  yield takeEvery(type.GET_SINGLE_PAYIN_REQUEST, handleGetSinglePayin);
  yield takeEvery(type.FILTER_PAYINS_REQUEST, handleGetFilterPayins);
  yield takeEvery(type.SET_PAYIN_INFO_REQUEST, handleSetPayinInfo);
  yield takeEvery(type.DELETE_PAYIN_REQUEST, handleDeletePayin);
}

export default payinSaga;

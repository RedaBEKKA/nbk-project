import * as type from '../types/cartesTypes';

import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllCartes, getFilteredCartes, getSingleCarte } from 'api/cartes';

function* handleGetAllCartes(values) {
  yield put({ type: type.GET_CARTES_LOADING });

  const { response, error } = yield call(getAllCartes);
  console.log('response', response);
  console.log('error', error);
  if (response) yield put({ type: type.SET_CARTES, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}
function* handleGetFilterCartes(values) {
  console.log(values);
  yield put({ type: type.GET_CARTES_LOADING });

  const { response, error } = yield call(getFilteredCartes, values.payload);
  console.log('response', response);
  console.log('error', error);
  if (response) yield put({ type: type.SET_CARTES, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}
function* handleGetSingleCarte(values) {
  console.log(values);
  yield put({ type: type.GET_SINGLE_CARTE_LOADING });
  const { response, error } = yield call(getSingleCarte, values.payload);
  console.log('response', response);
  console.log('error', error);
  if (response) yield put({ type: type.SET_CARTE, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}

function* cartesSaga() {
  yield takeEvery(type.GET_CARTES_REQUEST, handleGetAllCartes);
  yield takeEvery(type.GET_SINGLE_CARTE_REQUEST, handleGetSingleCarte);
  yield takeEvery(type.FILTER_CARTES_REQUEST, handleGetFilterCartes);
}

export default cartesSaga;

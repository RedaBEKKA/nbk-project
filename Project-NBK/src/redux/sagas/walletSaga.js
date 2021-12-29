import * as type from '../types/walletTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllWallets, getFilteredWallets } from '../../api/wallet';

function* handleGetAllWallets(values) {
  console.log(values);
  yield put({ type: type.GET_WALLETS_LOADING });

  const { response, error } = yield call(getAllWallets, values.payload);
  console.log('response handleGetAllWallets', response);
  console.log('error handleGetAllWallets', error);
  if (response) yield put({ type: type.SET_WALLETS, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}
function* handleGetFilterWallets(values) {
  console.log(values);
  yield put({ type: type.GET_WALLETS_LOADING });

  const { response, error } = yield call(getFilteredWallets, values.payload);
  console.log('response handleGetFilterWallets', response);
  console.log('error handleGetFilterWallets', error);
  if (response) yield put({ type: type.SET_WALLETS, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}

function* walletSaga() {
  yield takeEvery(type.GET_WALLETS_REQUEST, handleGetAllWallets);
  yield takeEvery(type.FILTER_WALLETS_REQUEST, handleGetFilterWallets);
}

export default walletSaga;

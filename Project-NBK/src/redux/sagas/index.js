import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import walletSaga from './walletSaga';
import cartesSaga from './cartesSaga';

export default function* rootSaga() {
  yield all([authSaga(), walletSaga(), cartesSaga()]);
}

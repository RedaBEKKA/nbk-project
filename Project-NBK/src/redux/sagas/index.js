import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import walletSaga from './walletSaga';

export default function* rootSaga() {
  yield all([authSaga(), walletSaga()]);
}

import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import registerSaga from './registerSaga';
import usersSaga from './usersSaga';
import walletSaga from './walletSaga';
import cartesSaga from './cartesSaga';
import payinSaga from './payinSaga';

export default function* rootSaga() {
  yield all([authSaga(), registerSaga(), usersSaga(), walletSaga(), cartesSaga(), payinSaga()]);
}

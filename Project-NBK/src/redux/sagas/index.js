import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import registerSaga from './registerSaga';
import usersSaga from './usersSaga'
import walletSaga from './walletSaga';

export default function* rootSaga() {
  yield all([authSaga(),registerSaga(),usersSaga(),walletSaga()]);
  // yield all([authSaga(), ]);
}

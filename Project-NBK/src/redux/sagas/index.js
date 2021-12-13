import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import registerSaga from './registerSaga';

export default function* rootSaga() {
  yield all([authSaga(),registerSaga()]);
}

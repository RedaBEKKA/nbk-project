import * as type from "../types/usersTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers } from "../../api/users";

function* handleGetUsers() {
  yield put({ type: type.USERS_LOADING });
  const { response, error } = yield call(getUsers);
  if (response) yield put({ type: type.USERS, payload: response.data });
  else yield put({ type: type.USERS_FAILED, payload: error.response });
}

function* usersSaga() {
  yield takeEvery(type.USERS_REQUEST, handleGetUsers);
}

export default usersSaga;

//   if (response) yield put({ type: type.USERS, payload: response.data });

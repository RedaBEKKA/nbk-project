import * as type from "../types/usersTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers } from "../../api/users";

function* handleGetUsers() {
  yield put({ type: type.USERS_LOADING });
  try {
    const res = yield call(getUsers);
    console.log(`res`, res);
    yield put({ type: type.USERS, payload: res.response });
  } catch (error) {
    console.log(error);
  }
}

function* usersSaga() {
  yield takeEvery(type.USERS_REQUEST, handleGetUsers);
}

export default usersSaga;

//   if (response) yield put({ type: type.USERS, payload: response.data });

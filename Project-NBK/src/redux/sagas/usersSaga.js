import * as type from "../types/usersTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { getFilteredUsers, getUsers } from "../../api/users";

function* handleGetUsers(values) {
  console.log(`values`, values) 
  yield put({ type: type.USERS_LOADING });
  const { response, error } = yield call(getUsers,values.payload);
  console.log('response handleGetUsers', response);
  console.log('error handleGetUsers', error);
  if (response) yield put({ type: type.USERS, payload: response.data });
  else yield put({ type: type.USERS_FAILED, payload: error.response });
}

function* handleGetFilterUsers(values) {
  // console.log(values);
  yield put({ type: type.USERS_LOADING });

  const { response, error } = yield call(getFilteredUsers, values.payload);
  // console.log('response handleGetFilterUsers', response);
  // console.log('error handleGetFilterUsers', error);
  if (response) yield put({ type: type.USERS, payload: response.data });
  //   else yield put({ type: type.LOGIN_FAILED, payload: error.response });
}
function* usersSaga() {
  yield takeEvery(type.USERS_REQUEST, handleGetUsers);
  yield takeEvery(type.FILTER_USERS_REQUEST, handleGetFilterUsers);
}

export default usersSaga;

//   if (response) yield put({ type: type.USERS, payload: response.data });

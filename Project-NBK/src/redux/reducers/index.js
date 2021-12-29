import { combineReducers } from 'redux';
import auth from './auth';
import wallet from './wallet';

import register from "./register"
import users from "./users"
const rootReducer = combineReducers({
  auth,
  wallet,
  register,
  users
});

export default rootReducer;

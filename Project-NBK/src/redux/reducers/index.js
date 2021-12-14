import { combineReducers } from 'redux';
import auth from './auth';
import register from "./register"
import users from "./users"
const rootReducer = combineReducers({
  auth,
  register,
  users
});

export default rootReducer;

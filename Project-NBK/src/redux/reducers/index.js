import { combineReducers } from 'redux';
import auth from './auth';
import wallet from './wallet';
import cartes from './cartes';

import register from './register';
import users from './users';
const rootReducer = combineReducers({
  auth,
  wallet,
  register,
  users,
  cartes,
});

export default rootReducer;

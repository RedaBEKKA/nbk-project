import { combineReducers } from 'redux';
import auth from './auth';
import wallet from './wallet';
import cartes from './cartes';
import payins from './payins';

import register from './register';
import users from './users';
const rootReducer = combineReducers({
  auth,
  wallet,
  register,
  users,
  cartes,
  payins,
});

export default rootReducer;

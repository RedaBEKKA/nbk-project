import { combineReducers } from 'redux';
import auth from './auth';
import wallet from './wallet';
import cartes from './cartes';
import payins from './payins';

import register from './register';
import users from './users';
import deleteDialoge from './deleteDialoge';
const rootReducer = combineReducers({
  auth,
  wallet,
  register,
  users,
  cartes,
  payins,
  deleteDialoge,
});

export default rootReducer;

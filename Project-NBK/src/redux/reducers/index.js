import { combineReducers } from 'redux';
import auth from './auth';
import wallet from './wallet';
import cartes from './cartes';

const rootReducer = combineReducers({
  auth,
  wallet,
  cartes,
});

export default rootReducer;

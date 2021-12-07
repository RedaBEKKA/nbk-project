import * as type from '../types/authTypes';

const initialState = {
  isAuth: false,
  appToken: process.env.REACT_APP_TOKEN,
  appExpire: null,
  accessToken: null,
  accessExpire: null,
  RefreshToken: null,
  idToken: null,
  userId: null,
  loading: false,
  error: null,
  resetError: null,
  forgetStatus: null,
  ResetStatus: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case type.LOGOUT:
      return {
        ...initialState,
      };
    case type.SET_APP_TOKEN:
      console.log('set app token payload', action.payload);
      return {
        ...state,
        appToken: action.payload.data.data.AccessToken,
        appExpire: action.payload.data.data.ExpiresIn,
      };
    case type.LOGIN:
      console.log('login payload', action.payload);
      return {
        ...state,
        isAuth: true,
        accessToken: action.payload.data.AccessToken,
        accessExpire: action.payload.data.ExpiresIn,
        RefreshToken: action.payload.data.RefreshToken,
        idToken: action.payload.data.IdToken,
        userId: action.payload.data.userId,
        error: null,
        loading: false,
      };
    case type.LOGIN_FAILED:
      console.log('login payload', action.payload);
      return {
        ...state,
        error: action.payload.data?.StatusDescription,
        loading: false,
      };
    case type.RESET_FAILED:
      console.log('login payload', action.payload);
      return {
        ...state,
        resetError: action.payload.data?.StatusDescription,
        loading: false,
      };
    case type.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case type.FORGET_SUCCESS:
      return {
        ...state,
        forgetStatus: action.payload.status,
        loading: false,
      };
    case type.RESET_SUCCESS:
      return {
        ...state,
        loading: false,
        resetStatus: action.payload.status,
      };
    case type.FORGET_FAILED:
      return {
        ...state,
        forgetStatus: action.payload.status,
        loading: false,
      };
    case 'REDIRECT':
      window.location.replace(action.payload);
      return state;
    case 'RESET_AUTH_STATE':
      return {
        ...state,
        loading: false,
        error: null,
        resetError: null,
        forgetStatus: null,
        ResetStatus: null,
      };
    default:
      return state;
  }
}

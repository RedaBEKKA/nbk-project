import * as type from '../types';

const initialState = {
  isAuth: false,
  appToken: null,
  appExpire: null,
  accessToken: null,
  accessExpire: null,
  RefreshToken: null,
  idToken: null,
  userId: null,
  loading: false,
  errors: null,
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
        // appToken: action.payload.data.data.AccessToken,
        // appExpire: action.payload.data.data.ExpiresIn,
      };

    default:
      return state;
  }
}

import * as type from '../types/registrationTypes';

const StateInitial = {
  isRegister: false,
  status: null,
  loading: false,
  error: null,

};

export default function register(state = StateInitial, action) {
  switch (action.type) {
    case type.REGISTER:
      console.log('REGISTER payload', action.payload);
      return {
        ...state,
        isRegister: true,
        status: action.payload.status,
        error: null,
        loading: false,
      };
    case type.REGISTER_FAILED:
      console.log('REGISTER payload', action.payload);
      return {
        ...state,
        error: action.payload.data?.statusDescription || action.payload.data?.StatusDescription,
        loading: false,
        status: action.payload.status,

      };
    case type.REGISTER_LOADING:
      return {
        ...state,
        loading: true,

      };
      default:
        return state;
  }
}

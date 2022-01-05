import * as type from '../types/payinsTypes';

const initialState = {
  payins: [],
  payin: null,
  getAllLoading: false,
  getSingleLoading: false,
  info: null,
};

export default function payins(state = initialState, action) {
  switch (action.type) {
    case type.SET_PAYINS:
      return {
        ...state,
        payins: action?.payload?.data?.payins,
        getAllLoading: false,
      };
    case type.SET_PAYIN:
      return {
        ...state,
        payin: action?.payload?.data,
        getSingleLoading: false,
      };
    case type.SET_PAYIN_INFO:
      return {
        ...state,
        info: action?.payload,
      };
    case type.GET_PAYINS_LOADING:
      return {
        ...state,
        getAllLoading: true,
      };
    case type.GET_SINGLE_PAYIN_LOADING:
      return {
        ...state,
        getSingleLoading: true,
      };

    default:
      return state;
  }
}

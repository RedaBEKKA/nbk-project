import * as type from '../types/walletTypes';

const initialState = {
  wallets: [],
  getLoading: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case type.SET_WALLETS:
      return {
        ...state,
        wallets: action?.payload?.data?.wallets,
        getLoading: false,
      };
    case type.GET_WALLETS_LOADING:
      return {
        ...state,
        getLoading: true,
      };

    default:
      return state;
  }
}

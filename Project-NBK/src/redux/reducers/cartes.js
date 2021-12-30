import * as type from '../types/cartesTypes';

const initialState = {
  cartes: [],
  carte: null,
  getAllLoading: false,
  getSingleLoading: false,
  info: null,
};

export default function cartes(state = initialState, action) {
  switch (action.type) {
    case type.SET_CARTES:
      return {
        ...state,
        cartes: action?.payload?.data?.cards,
        getAllLoading: false,
      };
    case type.SET_CARTE:
      return {
        ...state,
        carte: action?.payload?.data,
        getSingleLoading: false,
      };
    case type.SET_CART_INFO:
      return {
        ...state,
        info: action?.payload,
      };
    case type.GET_CARTES_LOADING:
      return {
        ...state,
        getAllLoading: true,
      };
    case type.GET_SINGLE_CARTE_LOADING:
      return {
        ...state,
        getSingleLoading: true,
      };

    default:
      return state;
  }
}

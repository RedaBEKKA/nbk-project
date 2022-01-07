import * as type from '../types/deleteDialogeTypes';

const initialState = {
  open: false,
};

export default function cartes(state = initialState, action) {
  switch (action.type) {
    case type.OPEN_DELETE_DIALOGE:
      return {
        open: true,
      };
    case type.CLOSE_DELETE_DIALOGE:
      return {
        open: false,
      };

    default:
      return state;
  }
}

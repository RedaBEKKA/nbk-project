import * as type from "../types/usersTypes";

const initiaUsers = {
  users: [],
  loading: false,
  error: null,
  status: "",
};

export default function auth(state = initiaUsers, action) {
  switch (action.type) {
    case type.USERS:
      console.log("users payload", action.payload);
      return {
        ...state,
        users: action.payload,
        error: null,
        loading: false,
      };
    case type.USERS_FAILED:
      console.log("users payload", action.payload);
      return {
        ...state,
        error:
          action.payload.data?.statusDescription ||
          action.payload.data?.statusDescription,
        loading: false,
        status: action.payload.data?.status,
      };
    case type.USERS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

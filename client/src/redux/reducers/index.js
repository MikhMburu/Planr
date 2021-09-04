import { combineReducers } from "redux";
import { DONE, LOADING } from "../types";
const initialState = {
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DONE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;

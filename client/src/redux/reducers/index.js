import { combineReducers } from "redux";
import { DONE, LOADING } from "../types";
import JobReducer from "./jobs";
import TaskReducer from "./tasks";
const initialState = {
  isLoading: false,
};

const mainReducer = (state = initialState, action) => {
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
const rootReducer = combineReducers({
  main: mainReducer,
  jobs: JobReducer,
  tasks: TaskReducer,
});

export default rootReducer;

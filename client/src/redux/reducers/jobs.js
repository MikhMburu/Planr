import update from "react-addons-update";
import {
  SAVE_JOB,
  RETRIEVE_JOBS,
  SET_JOB,
  DELETE_JOB,
  UNSET_JOB,
  AWAITING_JOBS,
  JOBS_DONE,
  UPDATE_JOB,
} from "../types";

const initialState = {
  isLoading: false,
  jobs: [],
  selected_job: null,
};

const JobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case RETRIEVE_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case SET_JOB:
      return {
        ...state,
        selected_job: state.jobs.filter((job) => job._id === action.payload)[0],
      };
    case UNSET_JOB:
      return {
        ...state,
        selected_job: null,
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload),
      };
    case AWAITING_JOBS:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_JOB:
      return update(state, {
        jobs: {
          [state.jobs.findIndex((job) => job._id === action.payload._id)]: {
            $set: action.payload,
          },
        },
      });
    case JOBS_DONE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default JobReducer;

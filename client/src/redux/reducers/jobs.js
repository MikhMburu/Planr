import {
  SAVE_JOB,
  RETRIEVE_JOBS,
  SET_JOB,
  DELETE_JOB,
  UNSET_JOB,
} from "../types";

const initialState = {
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
        selected_job: state.jobs.filter((job) => job._id === action.payload),
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
    default:
      return state;
  }
};

export default JobReducer;

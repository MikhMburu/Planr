import update from "react-addons-update";
import {
  SAVE_TASK,
  SET_TASK,
  DELETE_TASK,
  RETRIEVE_TASKS,
  FILTER_TASKS,
  UNSET_TASK,
  CLEAR_FILTER,
  AWAITING_TASKS,
  TASKS_DONE,
  UPDATE_TASKS,
} from "../types";

const initialState = {
  isLoading: false,
  tasks: [],
  selected_task: null,
  filtered: [],
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case SET_TASK:
      return {
        ...state,
        selected_task: state.tasks.filter(
          (task) => task._id === action.payload
        )[0],
      };
    case UNSET_TASK:
      return {
        ...state,
        selected_task: null,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };

    case RETRIEVE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case FILTER_TASKS:
      return {
        ...state,
        filtered: state.tasks.filter((task) => task.job === action.payload),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: [],
      };
    case AWAITING_TASKS:
      return {
        ...state,
        isLoading: true,
      };
    case TASKS_DONE:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_TASKS:
      return update(state, {
        tasks: {
          [state.tasks.findIndex((task) => task._id === action.payload._id)]: {
            $set: action.payload,
          },
        },
      });
    default:
      return state;
  }
};

export default TaskReducer;

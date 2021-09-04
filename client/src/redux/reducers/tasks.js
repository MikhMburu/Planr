import {
  SAVE_TASK,
  SET_TASK,
  DELETE_TASK,
  RETRIEVE_TASKS,
  FILTER_TASKS,
  RETRIEVE_A_TASK,
  UNSET_TASK,
  CLEAR_FILTER,
} from "../types";

const initialState = {
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
        ),
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
    default:
      return state;
  }
};

export default TaskReducer;

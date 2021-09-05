import {
  CLEAR_FILTER,
  DELETE_JOB,
  DELETE_TASK,
  DONE,
  FILTER_TASKS,
  LOADING,
  RETRIEVE_JOBS,
  RETRIEVE_TASKS,
  SAVE_JOB,
  SAVE_TASK,
  SET_JOB,
  SET_TASK,
  UNSET_JOB,
  UNSET_TASK,
} from "../types";
// Save a task
export const saveTask = (task) => (dispatch) => {
  return dispatch({
    type: SAVE_TASK,
    payload: task,
  });
};

// Retrieve all tasks
export const retrieveTasks = (tasks) => (dispatch) => {
  return dispatch({
    type: RETRIEVE_TASKS,
    payload: tasks,
  });
};
// Set a task to focus
export const setTask = (id) => (dispatch) => {
  return dispatch({
    type: SET_TASK,
    payload: id,
  });
};
export const unsetTask = () => (dispatch) => {
  return dispatch({
    type: UNSET_TASK,
  });
};
// Delete a task
export const deleteTask = (id) => (dispatch) => {
  return dispatch({
    type: DELETE_TASK,
    payload: id,
  });
};
// Filter tasks
export const filterTasks = (id) => (dispatch) => {
  return dispatch({
    type: FILTER_TASKS,
    payload: id,
  });
};
export const clearFilter = () => (dispatch) => {
  return dispatch({
    type: CLEAR_FILTER,
  });
};
// Save a job
export const saveJob = (job) => (dispatch) => {
  return dispatch({
    type: SAVE_JOB,
    payload: job,
  });
};
// Retrieve jobs
export const retrieveJobs = (jobs) => (dispatch) => {
  return dispatch({
    type: RETRIEVE_JOBS,
    payload: jobs,
  });
};
// Set a job to focus
export const setJob = (id) => (dispatch) => {
  return dispatch({
    type: SET_JOB,
    payload: id,
  });
};
export const unsetJob = () => (dispatch) => {
  return dispatch({
    type: UNSET_JOB,
  });
};
// Delete a job
export const deleteJob = (id) => (dispatch) => {
  return dispatch({
    type: DELETE_JOB,
    payload: id,
  });
};
// App loading
export const wait = () => (dispatch) => {
  return dispatch({
    type: LOADING,
  });
};
// Done loading
export const done = () => (dispatch) => {
  return dispatch({
    type: DONE,
  });
};

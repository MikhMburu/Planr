import {
  AWAITING_JOBS,
  AWAITING_TASKS,
  CLEAR_FILTER,
  DELETE_JOB,
  DELETE_TASK,
  DONE,
  FILTER_TASKS,
  JOBS_DONE,
  LOADING,
  RETRIEVE_JOBS,
  RETRIEVE_TASKS,
  SAVE_JOB,
  SAVE_TASK,
  SET_JOB,
  SET_TASK,
  TASKS_DONE,
  UNSET_JOB,
  UNSET_TASK,
  UPDATE_JOB,
  UPDATE_TASKS,
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
// Tasks Loading
export const startTasks = () => (dispatch) => {
  return dispatch({
    type: AWAITING_TASKS,
  });
};
// Tasks done loading
export const finishTasks = () => (dispatch) => {
  return dispatch({
    type: TASKS_DONE,
  });
};
// Update a task
export const updateTask = (task) => (dispatch) => {
  return dispatch({
    type: UPDATE_TASKS,
    payload: task,
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
// Jobs Loading
export const startJobs = () => (dispatch) => {
  return dispatch({
    type: AWAITING_JOBS,
  });
};
// Jobs done loading
export const finishJobs = () => (dispatch) => {
  return dispatch({
    type: JOBS_DONE,
  });
};
// Update Job
export const updateJob = (job) => (dispatch) => {
  return dispatch({
    type: UPDATE_JOB,
    payload: job,
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

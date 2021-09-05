import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";
import { actionCreators } from "../redux/actions";

const TaskModal = () => {
  // Redux state
  const dispatch = useDispatch();
  const { saveTask, deleteTask, unsetTask } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const selected_job = useSelector((state) => state.jobs.selected_job);
  const selected_task = useSelector((state) => state.tasks.selected_task);
  // Component state
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDesc] = useState("");

  useEffect(() => {
    if (selected_task) {
      const { title, to, from, description } = selected_task;
      setTitle(title);
      setFrom(from);
      setTo(to);
      setDesc(description);
    }
  }, [selected_task]);

  const onSubmit = async (e) => {
    e.preventDefault();

    let task;
    if (selected_job) {
      let job;
      job = selected_job._id;
      task = { title, to, from, description, job };
    } else {
      task = { title, to, from, description };
    }
    try {
      if (selected_task) {
        const res = await axios.post(
          `/routes/api/tasks/${selected_task._id}`,
          task,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        deleteTask(selected_task._id);
        saveTask(res.data.task);
        M.toast({ html: res.data.msg });
        setTitle("");
        setTo("");
        setFrom("");
        setDesc("");
        unsetTask();
      } else {
        const res = await axios.post("/routes/api/tasks/create-task/", task, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        saveTask(res.data.task);
        M.toast({ html: res.data.msg });
        setTitle("");
        setTo("");
        setFrom("");
        setDesc("");
      }
    } catch (err) {
      M.toast({ html: err });
      console.log(err);
    }
  };
  return (
    <div id="add-task" className="modal modal-fixed-footer">
      <form onSubmit={onSubmit}>
        <div className="modal-content">
          <h4 className="green-text darken-3">Add Task</h4>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="title"
                type="text"
                className="validate"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <label htmlFor="title">Task</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="date_from"
                type="date"
                className="validate"
                onChange={(e) => setFrom(e.target.value)}
                value={from}
              />
              <label htmlFor="date_from">From</label>
            </div>
            <div className="input-field col s6">
              <input
                name="date_to"
                type="date"
                className="validate"
                onChange={(e) => setTo(e.target.value)}
                value={to}
              />
              <label htmlFor="date_to">To</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="description"
                className="materialize-textarea"
                onChange={(e) => setDesc(e.target.value)}
                value={description}
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Save task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;

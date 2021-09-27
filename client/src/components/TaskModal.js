// Import libraries
import React, { useState, useEffect, useRef } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import M from "materialize-css";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// Import files and components
import { actionCreators } from "../redux/actions";
import { appdateTodbase, dbasedateToapp } from "../utilities";

const TaskModal = () => {
  // Redux state
  const dispatch = useDispatch();
  const { saveTask, unsetTask, updateTask } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const selected_job = useSelector((state) => state.jobs.selected_job);
  const selected_task = useSelector((state) => state.tasks.selected_task);
  // Component state
  const [title, setTitle] = useState("");
  const [_from, setFrom] = useState(null);
  const [_to, setTo] = useState(null);
  const [description, setDesc] = useState("");

  const dateModal = useRef();
  const timeModal = useRef();
  const dateModal1 = useRef();
  const timeModal1 = useRef();

  useEffect(() => {
    // Initializes toast, Datepicker and Timepicker modals
    // M.Toast.init()

    M.Datepicker.init(dateModal.current, {
      defaultDate: new Date(),
      onSelect: (date) => {
        setFrom(date);
      },
      autoClose: true,
    });
    M.Timepicker.init(timeModal.current, {
      twelveHour: false,
      onSelect: (hh, mm) => {
        _from.setHours(hh, mm);
      },
      autoClose: true,
    });
    M.Timepicker.init(timeModal1.current, {
      twelveHour: false,
      onSelect: (hh, mm) => {
        _to.setHours(hh, mm);
      },
      autoClose: true,
    });
    M.Datepicker.init(dateModal1.current, {
      defaultDate: new Date(),
      onSelect: (date) => {
        setTo(date);
      },
      autoClose: true,
    });
    // eslint-disable-next-line
  }, [_from, _to]);
  useEffect(() => {
    // For editting a task
    if (selected_task) {
      const { title, to, from, description } = selected_task;
      setTitle(title);
      setFrom(dbasedateToapp(from));
      setTo(dbasedateToapp(to));
      setDesc(description);
    }
  }, [selected_task]);

  const onSubmit = async (e) => {
    e.preventDefault();

    let task;
    const to = appdateTodbase(_to.getTime());
    const from = appdateTodbase(_from.getTime());

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

        updateTask(res.data.task);
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
            <div className="col m7">
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
            <div className="col m5">
              <h5>Choose Start and End Date</h5>
              <div className="row">
                {/* <DateRangePicker value={value} onChange={onChange} /> */}
                <div className="col m8">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="from"
                        ref={dateModal}
                        type="text"
                        className="datepicker no-autoinit"
                      />
                      <label htmlFor="from">Start date</label>
                    </div>
                  </div>
                </div>
                <div className="col m4">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="time_from"
                        ref={timeModal}
                        type="text"
                        className="timepicker no-autoinit"
                      />
                      <label htmlFor="time_from">Time</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col m8">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="to"
                        type="text"
                        ref={dateModal1}
                        className="datepicker no-autoinit"
                      />
                      <label htmlFor="to">End date</label>
                    </div>
                  </div>
                </div>
                <div className="col m4">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="time_to"
                        type="text"
                        ref={timeModal1}
                        className="timepicker no-autoinit"
                      />
                      <label htmlFor="time_to">Time</label>
                    </div>
                  </div>
                </div>
              </div>
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

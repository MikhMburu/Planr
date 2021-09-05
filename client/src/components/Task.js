import React from "react";
import Moment from "react-moment";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { actionCreators } from "../redux/actions";
import M from "materialize-css/dist/js/materialize.min.js";
const Task = ({ task }) => {
  // Component state
  // Redux
  const dispatch = useDispatch();
  const { deleteTask, setTask } = bindActionCreators(actionCreators, dispatch);
  const deleteHandler = async () => {
    try {
      const res = await axios.delete(`/routes/api/tasks/${task._id}`);
      deleteTask(task._id);
      M.toast({ html: res.data.msg });
    } catch (err) {
      M.toast({ html: err });
    }
  };
  const editHandler = async () => {
    setTask(task._id);
  };
  return (
    <div className="row">
      <div className="col s12 m10">
        <div className="card-panel">
          <div className="card-header">
            <div className="heading">{task.title}</div>
            <div className="control">
              <ul>
                <li>
                  <a
                    href="#add-task"
                    className="modal-trigger"
                    onClick={editHandler}
                  >
                    <i className="tiny material-icons">edit</i>
                  </a>
                </li>
                <li onClick={deleteHandler}>
                  <i className="tiny material-icons">delete</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col m8">{task.description}</div>
              <div className="col m4 grey-text text-darken-1 ">
                <span>
                  Start:{"  "}
                  <Moment format="Do MMM, YYYY">{task.from}</Moment>
                </span>
                <span>
                  End:{"  "}
                  <Moment format="Do MMM, YYYY">{task.to}</Moment>
                </span>
              </div>
            </div>

            <div className="progress">
              <div className="determinate" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

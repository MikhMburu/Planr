import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/actions";

const HeaderMain = () => {
  // Redux
  const selected = useSelector((state) => state.jobs.selected_job);
  const dispatch = useDispatch();
  const { filterTasks } = bindActionCreators(actionCreators, dispatch);

  // Component state
  useEffect(() => {
    if (selected) {
      filterTasks(selected._id);
    }
    // eslint-disable-next-line
  }, []);

  const editJobHandler = (e) => {
    e.preventDefault();
    console.log("Editted");
  };

  return (
    <div id="header-main" className="row">
      <div className="col m9 ">
        <h4>{selected ? selected.title : "Welcome to Planr"}</h4>
        <blockquote className="flow-text">
          {selected
            ? selected.description
            : "Below is a list of all the tasks made."}
        </blockquote>
      </div>
      <div className="col m3">
        <a
          href="#add-job"
          className="waves-effect waves-teal btn-flat modal-trigger"
          onClick={editJobHandler}
        >
          Edit
          <i className="tiny material-icons blue-text">edit</i>
        </a>
        <a
          href="#delete-job"
          className="waves-effect waves-teal btn-flat modal-trigger"
        >
          Delete
          <i className="tiny material-icons red-text">delete</i>
        </a>
      </div>
    </div>
  );
};

export default HeaderMain;

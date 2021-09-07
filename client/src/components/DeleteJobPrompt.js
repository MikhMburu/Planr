import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";
import { actionCreators } from "../redux/actions";

const DeleteJobPrompt = () => {
  // Redux
  const selected = useSelector((state) => state.jobs.selected_job);
  const dispatch = useDispatch();
  const { deleteJob, unsetJob, clearFilter } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // Component State
  const deleteJobHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`/routes/api/jobs/${selected._id}`);
      const task_res = await axios.delete(
        `/routes/api/tasks/delete-many/${selected._id}`
      );
      deleteJob(selected._id);
      unsetJob();
      clearFilter();
      M.toast({ html: res.data.msg });
      M.toast({ html: task_res.data.msg });
    } catch (err) {
      M.toast({ html: err });
    }
  };
  return (
    <div id="delete-job" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4 className="red-text darken-3 center">Delete Job?</h4>
        <p className="flow-text center">
          Are you sure you want to delete this job? Doing so will delete all the
          tasks under this job too...
        </p>
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-green btn-flat">
          No, go back
        </button>
        <button
          className="modal-close waves-effect waves-green btn-flat"
          onClick={deleteJobHandler}
        >
          Yes, Delete Job
        </button>
      </div>
    </div>
  );
};

export default DeleteJobPrompt;

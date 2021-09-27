import React, { useEffect } from "react";
import axios from "axios";
import JobItem from "./JobItem";
import { bindActionCreators } from "redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { useSelector, useDispatch } from "react-redux";
import Clock from "react-clock";
import { actionCreators } from "../redux/actions";
import Loader from "./Loader";
import isEmpty from "../utilities/isEmpty";

const Sidebar = ({ time }) => {
  // Redux
  const dispatch = useDispatch();
  const { retrieveJobs, startJobs, finishJobs } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const jobs = useSelector((state) => state.jobs.jobs);
  const isLoading = useSelector((state) => state.jobs.isLoading);

  useEffect(() => {
    startJobs();
    axios
      .get("/routes/api/jobs/")
      .then((res) => {
        if (!isEmpty(res.data.jobs)) {
          retrieveJobs(res.data.jobs);
          M.toast({ html: res.data.msg });
          finishJobs();
        }
      })
      .catch((err) =>
        M.toast({ html: "INTERNAL ERROR: Could not retrieve jobs" })
      );
    // eslint-disable-next-line
  }, []);

  return (
    <div className="sidebar hide-on-small-and-down">
      <div className="panel">
        <h4>PLANR</h4>
        <div id="clock">
          <Clock size={250} renderNumbers={true} value={time} />
        </div>
      </div>
      <div id="jobs">
        <h3>Jobs</h3>
        <div className="collection">
          {!isLoading ? (
            jobs.map((job) => <JobItem job={job} key={job._id} />)
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

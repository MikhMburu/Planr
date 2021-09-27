import React from "react";
import M from "materialize-css";
import { dbasedateToapp } from "../utilities";

const Progress = ({ start, end, current_time }) => {
  const curr = current_time.getTime();
  const start_time = dbasedateToapp(start).getTime();
  const end_time = dbasedateToapp(end).getTime();
  const hr = 60 * 60 * 1000;

  if (curr < start_time) {
    return (
      <div>
        <p className="center">Not started</p>
      </div>
    );
  } else if (start_time < curr && curr < end_time) {
    const hrs_passed = (curr - start_time) / hr;
    const allotted_time = (end_time - start_time) / hr;
    const progress = (hrs_passed / allotted_time) * 100;

    return (
      <div className="progress">
        <div className="determinate" style={{ width: `${progress}%` }}></div>
      </div>
    );
  } else if (curr === end_time) {
    M.toast({ html: "Time is up" });
  } else if (end_time <= curr) {
    return (
      <div className="progress">
        <div
          className="determinate"
          style={{ width: "100%", background: "red" }}
        ></div>
      </div>
    );
  }
};

export default Progress;

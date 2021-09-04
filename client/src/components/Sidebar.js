import React from "react";
import JobItem from "./JobItem";

const Sidebar = () => {
  return (
    <div className="sidebar hide-on-small-and-down">
      <div className="panel">
        <h2>PLANR</h2>
        The time now is 12.25am
      </div>
      <div id="jobs">
        <h3>Jobs</h3>
        <div className="collection">
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

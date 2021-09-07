import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/actions";

const JobItem = ({ job }) => {
  // Redux
  const dispatch = useDispatch();
  const { setJob, filterTasks } = bindActionCreators(actionCreators, dispatch);
  const selected = useSelector((state) => state.jobs.selected_job);
  const tasks = useSelector((state) => state.tasks.tasks);

  // Component State
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (selected) {
      if (job._id === selected._id) {
        setActive(true);
        filterTasks(selected._id);
      } else {
        setActive(false);
      }
    }
    // eslint-disable-next-line
  }, [selected]);
  let taskCount = 0;
  if (tasks) {
    taskCount = tasks.filter((task) => task.job === job._id).length;
  }

  const onClick = (e) => {
    e.preventDefault();
    setJob(job._id);
  };
  return (
    <a
      href="#!"
      onClick={onClick}
      className={classNames("collection-item", {
        active: active === true,
      })}
    >
      <span
        className={classNames("badge", {
          "white-text": active === true,
        })}
      >
        {taskCount}
      </span>
      {job.title}
    </a>
  );
};

export default JobItem;

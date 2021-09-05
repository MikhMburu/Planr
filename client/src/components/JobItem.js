import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/actions";

const JobItem = ({ job }) => {
  // Redux
  const dispatch = useDispatch();
  const { setJob } = bindActionCreators(actionCreators, dispatch);
  const onClick = (e) => {
    e.preventDefault();
    setJob(job._id);
  };
  return (
    <a href="#!" onClick={onClick} className="collection-item ">
      <span className="badge">3</span>
      {job.title}
    </a>
  );
};

export default JobItem;

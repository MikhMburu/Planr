import React from "react";

const HeaderMain = () => {
  const editJobHandler = (e) => {
    e.preventDefault();
    console.log("Editted");
  };
  const deleteJobHandler = (e) => {
    e.preventDefault();
    console.log("Deleted");
  };
  return (
    <div id="header-main" className="row">
      <div className="col m9 ">
        <h4>Job header</h4>
        <blockquote className="flow-text">
          Lots of stuff written in the past
        </blockquote>
      </div>
      <div className="col m3">
        <a
          href="#!"
          className="waves-effect waves-teal btn-flat"
          onClick={editJobHandler}
        >
          Edit
          <i className="tiny material-icons blue-text">edit</i>
        </a>
        <a
          href="#!"
          className="waves-effect waves-teal btn-flat"
          onClick={deleteJobHandler}
        >
          Delete
          <i className="tiny material-icons red-text">delete</i>
        </a>
      </div>
    </div>
  );
};

export default HeaderMain;

import React from "react";

const FloatingButton = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#!" className="btn-floating btn-large red">
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#add-job"
            className="btn-floating blue darken-3 modal-trigger"
          >
            <i className="material-icons">book</i>
          </a>
        </li>
        <li>
          <a
            href="#add-task"
            className="btn-floating green darken-3 modal-trigger"
          >
            <i className="material-icons">check_box</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FloatingButton;

import React from "react";
import FloatingButton from "./FloatingButton";

const Main = ({ children }) => {
  return (
    <div className="main">
      <FloatingButton />
      {/* <div className="row flt-btn">
        <a
          href="#add-task"
          className="
              btn-floating btn-large
              waves-effect waves-light
              red
              right
              modal-trigger
            "
        >
          <i className="material-icons">add</i>
        </a>
      </div> */}
      <div className="container">{children}</div>
    </div>
  );
};

export default Main;

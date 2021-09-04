import React from "react";

const Task = () => {
  return (
    <div className="row">
      <div className="col s12 m10">
        <div className="card-panel">
          <div className="card-header">
            <div className="heading">A task</div>
            <div className="control">
              <ul>
                <li>
                  <i className="tiny material-icons">edit</i>
                </li>
                <li>
                  <i className="tiny material-icons">close</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col m8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, eveniet at velit corporis neque non tenetur soluta
                praesentium a corrupti in facilis fuga, harum provident!
              </div>
              <div className="col m4 grey-text text-darken-1 ">
                <span>Start: 14th Feb, 2021</span>
                <span>End: 25th Feb, 2021</span>
              </div>
            </div>

            <div className="progress">
              <div className="determinate" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

import React from "react";

const TaskModal = () => {
  return (
    <div id="add-task" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4 className="green-text darken-3">Add Task</h4>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input name="title" type="text" className="validate" />
              <label htmlFor="title">Task</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input name="date_from" type="text" className="validate" />
              <label htmlFor="date_from">From</label>
            </div>
            <div className="input-field col s6">
              <input name="date_to" type="text" className="validate" />
              <label htmlFor="date_to">To</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="description"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Save task
        </a>
      </div>
    </div>
  );
};

export default TaskModal;

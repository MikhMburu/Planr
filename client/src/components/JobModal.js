import React from "react";

const JobModal = () => {
  return (
    <div id="add-job" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4 className="blue-text darken-2">Add Job</h4>
        <p className="flow-text">
          A job can have several tasks under it. Add a job to group several
          related tasks. To see your jobs, check the left panel. Click on a job
          to see all the tasks on the main panel.
        </p>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="title"
                type="text"
                className="validate"
                autoFocus={true}
              />
              <label htmlFor="title">Job</label>
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
          Save Job
        </a>
      </div>
    </div>
  );
};

export default JobModal;

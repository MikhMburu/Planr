// Import libraries
const express = require("express");
// Import files
const Task = require("../../schema/Task");
const isEmpty = require("../../utilities/isEmpty");
// Define functions
const router = express.Router();
// Define routes
// Create Task
router.post("/create-task", async (req, res) => {
  const { title, to, from, job, description } = req.body;
  try {
    const newTask = new Task({ title, to, from, job, description });
    const task = await newTask.save();
    res.json({ msg: "New task added", task });
  } catch (err) {
    const errmsg = "Unable to add new task. Please check console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Get all tasks
router.get("/", async (req, res) => {
  const msg = "Tasks successfully retrieved";
  let errmsg;
  try {
    const tasks = await Task.find();
    if (isEmpty(tasks)) {
      errmsg = "No tasks found.";
      res.status(404).json({ errmsg });
    } else {
      res.json({ msg, tasks });
    }
  } catch (err) {
    errmsg = "Unable to retrieve tasks. Please check console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Get all tasks
router.get("/:job_id", async (req, res) => {
  const { job_id } = req.params;
  const msg = "Tasks successfully retireved";
  let errmsg;
  try {
    const tasks = await Task.find({ job: job_id });
    if (isEmpty(tasks)) {
      errmsg = "No tasks for this job yet.";
      res.status(404).json(errmsg);
    } else {
      res.json({ msg, tasks });
    }
  } catch (err) {
    errmsg = "Unable to retrieve tasks. Please check console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Get one task
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const msg = "Task retrieved";
  let errmsg;
  try {
    const task = await Task.findById(id);
    if (!task) {
      errmsg = "A task with that id does not exist.";
      res.status(404).json(msg);
    } else {
      res.json(msg, task);
    }
  } catch (err) {
    errmsg = "Unable to retrieve task. Please check console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Edit a task
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, to, from, job, description } = req.body;
  const msg = "Task successfully editted.";
  let errmsg;
  try {
    // Check whether task exists
    let task = await Task.findById(id);
    if (!task) {
      errmsg = "Task with that id does not exist";
      res.status(404).json({ errmsg });
    } else {
      task = await Task.findByIdAndUpdate(
        id,
        { $set: { title, to, from, job, description } },
        { new: true }
      );
      res.json({ msg, task });
    }
  } catch (err) {
    errmsg = "Unable to edit task. Please check console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Delete a task
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const msg = "Task successfully deleted";
  let errmsg;
  try {
    // Check whether task exists
    let task = await Task.findById(id);
    if (!task) {
      errmsg = "Task with that id does not exist";
      req.status(404).json({ errmsg });
    } else {
      await Task.findByIdAndDelete(id);
      res.json({ msg });
    }
  } catch (err) {
    errmsg = "Unable to delete task. Please check console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// export router
module.exports = router;

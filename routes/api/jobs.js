// Import libraries
const express = require("express");
// Import files
const Job = require("../../schema/Job");
const Task = require("../../schema/Task");
const isEmpty = require("../../utilities/isEmpty");
// Define functions
const router = express.Router();
// Define routes
// Create Job
router.post("/create-job", async (req, res) => {
  const { title, description } = req.body;
  const msg = "Job successfully created";
  let errmsg;
  try {
    const newJob = new Job({ title, description });
    const job = await newJob.save();
    res.json({ msg, job });
  } catch (err) {
    errmsg = "Unable to create the job. Please check the console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Get all Jobs
router.get("/", async (req, res) => {
  const msg = "All jobs successfully retrieved";
  let errmsg;
  try {
    const jobs = await Job.find();
    if (isEmpty(jobs)) {
      errmsg = "No jobs to display.";
      return res.status(404).json({ errmsg });
    }
    res.json({ msg, jobs });
  } catch (err) {
    errmsg = "Unable to retrieve jobs. Please check the console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Get one Job
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const msg = "Job successfully retrieved";
  let errmsg;
  try {
    const job = await Job.findById(id);
    if (!job) {
      errmsg = "Job with that id does not exist";
      return res.status(404).json({ errmsg });
    }
    res.json({ msg, job });
  } catch (err) {
    errmsg = "Unable to retrieve job. Please check the console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Edit a Job
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const msg = "Job successfully editted";
  let errmsg;
  try {
    let job = Job.findById(id);
    if (!job) {
      errmsg = "Job not found";
      return res.status(404).json({ errmsg });
    }
    job = await Job.findByIdAndUpdate(
      id,
      { $set: { title, description } },
      { new: true }
    );
    res.json({ msg, job });
  } catch (err) {
    errmsg = "Unable to edit job. Please check the console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// Delete a Job
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const msg = "Job successfully deleted";
  let errmsg;
  try {
    job = await Job.findById(id);
    if (!job) {
      errmsg = "Job not found";
      return res.status(404).json({ errmsg });
    }
    await Task.deleteMany({ job: id });

    await Job.findByIdAndDelete(id);
    res.json({ msg });
  } catch (err) {
    errmsg = "Unable to delete job. Please check the console";
    res.status(400).json({ errmsg });
    console.log(errmsg, "\n", err);
  }
});
// export router
module.exports = router;

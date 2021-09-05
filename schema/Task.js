const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: "job",
  },
  description: {
    type: String,
    maxlength: 100,
  },
});

module.exports = Task = model("task", TaskSchema);

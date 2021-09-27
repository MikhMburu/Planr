const { Schema, model } = require("mongoose");

const DateSchema = new Schema({
  year: Number,
  month: Number,
  day: Number,
  hour: Number,
  minute: Number,
});

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  from: {
    type: DateSchema,
    required: true,
  },
  to: {
    type: DateSchema,
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
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task = model("task", TaskSchema);

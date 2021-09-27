const { Schema, model } = require("mongoose");

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: 100,
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
});

module.exports = Job = model("job", JobSchema);

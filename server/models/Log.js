const { Schema, model } = require("mongoose");

const logSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hours_worked: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  job_site: {
    type: Number,
    required: true,
  },
  comments: [
    {
      comment: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 280,
      },
    },
  ],
});

const Log = model("Log", logSchema);

module.exports = Log;

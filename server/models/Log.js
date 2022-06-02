const { Schema, model } = require('mongoose');

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
  },
  job_site: {
    type: String,
  },
  comments: {
    type: String,
    required: false,
  }
});

const Log = model('Log', logSchema);

module.exports = Log;
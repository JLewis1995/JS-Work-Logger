const { Schema, model } = require('mongoose');


const logSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hours_worked: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  job_site: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: false,
  }
});

const Log = model('Log', logSchema);

module.exports = Log;

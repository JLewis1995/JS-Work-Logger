const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: String
    required: true,
  },
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;

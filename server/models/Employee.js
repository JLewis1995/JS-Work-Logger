const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;

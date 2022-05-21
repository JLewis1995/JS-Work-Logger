const db = require('../config/connection');
const { Employee } = require('../models');

const employeeData = require('./employeeData.json');

db.once('open', async () => {
  await Employee.deleteMany({});

  const employees = await Employee.insertMany(employeeData);

  console.log('Employees seeded!');
  process.exit(0);
});

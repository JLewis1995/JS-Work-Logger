const db = require('../config/connection');
const { Employee } = require('../models');
const { Log } = require('../models');
const employeeData = require('./employeeData.json');
const logSeeds = require('./logsData.json')




db.once('open', async () => {
  try {
    await Employee.deleteMany({});
    await Log.deleteMany({});
    await Employee.create(employeeData);
    await Log.create(logSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});


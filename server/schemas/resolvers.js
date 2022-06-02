const { Employee, Log } = require('../models');

const resolvers = {
  Query: {
    employee: async () => {
      return Employee.find({});
    },
    log: async () => {
      return Log.find({});
    },
  },
  Mutation: {
    createLog: async (parent, args) => {
      const log = await Log.create(args);
      return log;
    },
  },
};

module.exports = resolvers;

const { Employee, Log } = require('../models');

const resolvers = {
  Query: {
    employee: async () => {
      return Employee.find({});
    },
    log: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Log.find(params);
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

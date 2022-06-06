const { Employee, Log } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    // employee: async (parent, { email }) => {
    //   return Employee.findOne({ email })
    // },
    log: async () => {
      return Log.find({});
    },
    employee: async () => {
      return Employee.find({});
    },
    me: async (parent, args, context) => {
      if (context && context.employee && context.employee.email) {
        const results = await Employee.findOne({ email: context.employee.email });
        if (results) {
          return results;
        }
        return new AuthenticationError('No results for me for: ' + context.employee.email)
      }
      throw new AuthenticationError('You need to be logged in!' + JSON.stringify(context.employee));
    },
    meLogs: async (parent, { email }) => {
      if (email) {
        const user = await Employee.findOne({ email });
        if (user) {
          const logs = await Log.find({ name: user.name });
          if (logs) {
            return logs;
          }
        }
        return new AuthenticationError('Null result in meLogs for: ' + email)
      }
      throw new AuthenticationError('No logs for me!');
    },
  },
  Mutation: {
    addLog: async (parent, args) => {
      console.log(`this is the args: ${args}`);
      const log = await Log.create(args);
      return log;
    },
    addEmployee: async (parent, { name, email, password }) => {
      const user = await Employee.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await Employee.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

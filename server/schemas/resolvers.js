const { Employee, Log } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    employee: async (parent, { username }) => {
      return Employee.findOne({ email })
    },
    log: async () => {
      return Log.find({});
    },
  },
  Mutation: {
    addLog: async (parent, args) => {
      console.log(`this is the args: ${args}`);
      const log = await Log.create(args);
      return log;
    },
    addEmployee: async (parent, { name, email, password }) => {
      const user = await Employee.create({name, email, password });
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

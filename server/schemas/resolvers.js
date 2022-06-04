const { Employee, Log } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username })
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
    addUser: async (parent, { username, email, password }) => {
      const user = await Employee.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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

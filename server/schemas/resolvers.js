const { Employee, Note } = require('../models');

const resolvers = {
  Query: {
    employee: async () => {
      return Employee.find({});
    },
    notes: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Note.find(params);
    },
  },
  Mutation: {
    createNote: async (parent, args) => {
      const note = await Note.create(args);
      return note;
    },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
  },
};

module.exports = resolvers;

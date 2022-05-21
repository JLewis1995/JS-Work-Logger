const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID!
    name: String!
  }

  type Note {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    employee: [Employee]
    notes(_id: String): [Note]
  }

  type Mutation {
    createNote(tech1: String!, tech2: String!): Note
  }
`;

module.exports = typeDefs;

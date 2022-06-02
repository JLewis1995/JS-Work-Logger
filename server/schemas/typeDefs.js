const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID!
    name: String!
    email: String!
    password: Sting!
    role: String!
  }

  type Log {
    _id: ID!
    name: String!
    role: String!
    job_site: Int!
    hours_worked: Int!
    comments: String
  }

  type Query {
    employee: [Employee]
    logs(_id: String): [Log]
  }

  type Mutation {
    createLog(name: String!, role: String!, job_site: Int!, hours_worked: Int!, comments: String!): Log
  }
`;

module.exports = typeDefs;

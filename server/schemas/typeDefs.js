const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID!
    name: String!
    email: String!
    password: String!
    role: String!
    logs: [Log]
  }

  type Log {
    _id: ID!
    name: String!
    role: String!
    job_site: Int!
    hours_worked: Int!
    comments: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    employee: [Employee]
    log(_id: String): [Log]
  }

  type Mutation {
    addEmployee(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createLog(name: String!, role: String!, job_site: Int!, hours_worked: Int!, comments: String!): Log
  }
`;

module.exports = typeDefs;

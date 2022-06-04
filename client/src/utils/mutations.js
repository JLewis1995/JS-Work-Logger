import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($name: String!, $email: String!, $password: String!) {
    addEmployee(name: $name, email: $email, password: $password) {
      token
      employee {
        _id
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      employee {
        _id
      }
    }
  }
`;

// Create Work Log
export const CREATE_FORM = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

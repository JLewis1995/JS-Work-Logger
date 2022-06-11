import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($name: String!, $email: String!, $password: String!) {
    addEmployee(name: $name, email: $email, password: $password) {
      token
      employee {
        _id
        email
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
        email
      }
    }
  }
`;

export const ADD_LOG = gql`
  mutation addLog($name: String!, $hours_worked: Int!, $role: String!, $job_site: Int!) {
    addLog(name: $name, hours_worked: $hours_worked, role: $role, job_site: $job_site) {
      _id
      name
      hours_worked
      role
      job_site
      comments {
        _id
        comment
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($logId: ID!, $comment: String!) {
    addComment(logId: $logId, comment: $comment) {
      _id
      name
      hours_worked
      role
      job_site
      comments {
        _id
        comment
      }
    }
  }
`;

export const REMOVE_LOG = gql`
  mutation removeLog($logId: ID!) {
    removeLog(logId: $logId) {
      _id
    }
  }
`;
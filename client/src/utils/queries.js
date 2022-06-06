import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
  query me($email: String!) {
    me(email: $email) {
      _id
      email
      name
      logs {
        _id
        name
        hours_worked
        role
        job_site
        comments
      }
    }
  }
`;

export const QUERY_LOGS = gql`
  query getLogs {
    log {
      _id
      name
      hours_worked
      role
      job_site
      comments
    }
  }
`;

export const QUERY_ME_LOGS = gql`
query meLogs($email: String!) {
  meLogs(email: $email) {
    _id
    name
    hours_worked
    role
    job_site
    comments
  }
}
`;

export const QUERY_ME = gql`
query me {
  me {
    email
    name
  }
}
`;

export const QUERY_NAMES = gql`
  query getNames {
    employee {
      name
      email
    }
  }
`;
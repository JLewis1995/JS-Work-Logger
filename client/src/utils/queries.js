import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query employee($email: String!) {
    employee(email: $email) {
      _id
      email
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
    logs {
      _id
      name
      hours_worked
      role
      job_site
      comments
    }
  }
`;

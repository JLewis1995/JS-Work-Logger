import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
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

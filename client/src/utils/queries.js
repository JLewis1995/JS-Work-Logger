import { gql } from "@apollo/client";

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
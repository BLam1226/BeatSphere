import { gql } from "@apollo/client";

// export const QUERY_PROFILES = gql`
//   query allProfiles($username: String!) {
//     profiles(username: $username) {
//       _id
//       username
//       email
//       songs
//     }
//   }
// `;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
      songs
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      songs
    }
  }
`;

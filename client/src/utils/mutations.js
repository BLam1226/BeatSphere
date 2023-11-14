import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        username
        email
        _id
      }
    }
  }
`;

export const ADD_SONG = gql`
  mutation addSong($profileId: ID!, $song: String!) {
    addSong(profileId: $profileId, song: $song) {
      _id
      name
      songs
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        email
      }
    }
  }
`;

export const REMOVE_SONG = gql`
  mutation removeSong($song: String!) {
    removeSong(song: $song) {
      _id
      name
      songs
    }
  }
`;

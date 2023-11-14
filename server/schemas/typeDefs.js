const typeDefs = `
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    songs: [String]!
  }

  type Song {
    _id: ID!
    title: String!
    artist: String!
    genre: String!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    songs: [Song]!
    song(songId: ID!): Song
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSong(title: String!, artist: String!, genre: String!): Song
    removeProfile: Profile
    removeSong(songId: ID!): Song
  }
`;

module.exports = typeDefs;

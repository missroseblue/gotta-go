const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Restroom {
    restroomId: String
    name: String
    street: String
    city: String
    directions: String
    accessible: Boolean
    unisex: Boolean
    changingTable: Boolean
    lat: Float
    long: Float
  }

  type Post {
    _id: ID
    username: String
    rating: Int
    restroom: String
    postText: String
    createdAt: String
  }

  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    restrooms(lat: Float, long: Float): [Restroom]
    restroom(restroomId: String!): Restroom
    posts(userId: ID): [Post]
    post(_id: ID!): Post
  }
`;

module.exports = typeDefs;

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

  type Auth {
    token: ID!
    user: User
  }

  input RestroomDetails {
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

  type Query {
    users: [User]
    user(_id: ID!): User
    restrooms(lat: Float, long: Float): [Restroom]
    restroom(restroomId: String!): Restroom
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(rating: Int!, restroom: String!, postText: String!): Post
    addRestroom(details: RestroomDetails!): [Restroom]
  }
`;

module.exports = typeDefs;

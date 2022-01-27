import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query findUsers {
    users {
      _id
      username
      email
      postCount
    }
  }
`;

export const GET_USER = gql`
  query findUser($id: ID!) {
    user(_id: $id) {
      _id
      username
      postCount
      posts {
        _id
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query findPosts($username: String) {
    posts(username: $username) {
      _id
      rating
      restroom
      postText
      username
      createdAt
    }
  }
`;

export const GET_POST = gql`
  query ($id: ID!) {
    post(_id: $id) {
      _id
      rating
      restroom
      postText
      createdAt
      username
    }
  }
`;

export const QUERY_RESTROOMS = gql`
  query findRestrooms {
    restrooms {
      restroomId
      name
      street
    }
  }
`;

export const GET_RESTROOM = gql`
  query ($restroomId: String!) {
    restroom(restroomId: $restroomId) {
      restroomId
      name
      street
      city
      directions
      accessible
      unisex
      changingTable
      lat
      long
    }
  }
`;

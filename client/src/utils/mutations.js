import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation createPost($rating: Int!, $restroom: String!, $postText: String!) {
    addPost(rating: $rating, restroom: $restroom, postText: $postText) {
      _id
      rating
      restroom
      postText
      username
    }
  }
`;

export const ADD_RESTROOM = gql`
  mutation addRestroom($details: RestroomDetails!) {
    addRestroom(details: $details) {
      restroomId
      name
    }
  }
`;

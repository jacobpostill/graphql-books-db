import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    # possibly use a body object
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook( $bookId: String!,  $title: String!, $description: String!) {
    saveBook(bookId: $bookId, title:$title, description:$description) {
      _id
    authors
    description
    title
    bookId
    image
    link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    rempveBook(bookId: $bookId) {
    _id
    authors
    description
    title
    bookId
    image
    link
      }
  }
`;

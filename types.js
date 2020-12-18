const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    role: Role!
    posts: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    author: User!
    published: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime
  }

  scalar DateTime

  enum Role {
    USER
    ADMIN
  }

  input CreateUserInput {
    email: String!
    name: String!
    role: Role!
  }

  input UpdateUserInput {
    id: ID!
    email: String
    name: String
    role: Role
  }

  input PostInput {
    title: String!
    authorId: ID!
    published: Boolean
  }

  type Query {
    users: [User]
    posts: [Post]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!

    createPost(input: PostInput!): Post!
  }
`;

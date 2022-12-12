const {gql} = require ("apollo-server-express");
const typeDefs = gql`
User and login params 
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}
 Book params 
type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
  }
   type Mutation {
    login(email String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String!, bookId: String!, image: String, link: String, title: String!): User
    RemoveBook(bookId: String!): User)
   }`

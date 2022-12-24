import {gql} from "@apollo/client";

export const LOGIN_USER = gql`

mutation login ($email: String!, $pasword: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;

export const ADD_USER = gql`

mutation addUser($username: String!, $email: String!, $password: String! ) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}

`;
export const SAVE_BOOK = gql`
mutation saveBook($input: BookInput) {
    saveBook (input: $input) {
        _id
        username
        email
        bookCount
        saveBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;

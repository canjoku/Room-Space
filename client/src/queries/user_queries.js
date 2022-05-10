import { gql } from '@apollo/client'
export const GET_USERS = gql`
{
  getUsers{
    _id
    firstName
    surname
    department
    email
  }
}
`

export const LOGIN_USER = gql`
{
  logIn (email:$email, password: $password) {
    userId
    token
    tokenExpiration
  }
}
`

export const SIGN_UP = gql`
mutation SignUp($firstName: String!, $surname: String!, $department: String!, $email: String!, $password: String!) {
  signUp(firstName: $firstName, surname: $surname, department: $department, email: $email, password: $password) {
    _id
    firstName
  	surname
    department
    email
  }
}
`

export const DELETE_USER = gql`
mutation DeleteUser($_id: String!) {
  deleteUser(_id: $_id) {
    _id
    firstName
    surname
    department
    email
  }
}
`
import React from 'react'
import { useMutation } from "@apollo/client";
import { GET_USERS, LOGIN_USER, SIGN_UP, DELETE_USER  } from '../queries/user_queries';

import '../css/Auth.css'

const AuthPage = () => {
  let firstName, surname, department, email, password;
  const [signUp] = useMutation(SIGN_UP);

  return (
    <div>
        <form className='auth-form' onSubmit={e => {
        e.preventDefault();
        signUp({variables: {firstName: firstName, surname: surname, department: department, email: email, password: password}}
        )}}>
          <fieldset>
          <div className='form-control'>
            <label htmlFor="firstName">First Name</label>
            <input ref={value => firstName = value} type="firstName" />
          </div>
          <div className='form-control'>
            <label htmlFor="surname">Surname</label>
            <input ref={value => surname = value} type="surname"/>
          </div>
          <div className='form-control'>
            <label htmlFor="department">Department</label>
            <input ref={value => department = value} type="department" />
          </div>
          <div className='form-control'>
            <label htmlFor="email">Email</label>
            <input ref={value => email = value} type="email"/>
          </div>
          <div className='form-control'>
            <label htmlFor="password">Password</label>
            <input ref={value => password = value} type="password" id="password"/>
          </div>
          <div className='form-actions'>
            <button type="submit">Submit</button>
            <button type="button">Switch to Sign up</button>
          </div>
          </fieldset>
        </form>
    </div>
   
  )

}

export default AuthPage;
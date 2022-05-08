import React, { Component } from 'react'
import '../css/Auth.css'

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.firstNameEl = React.createRef();
    this.surnameEl = React.createRef();
    this.departmentEl = React.createRef();
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  submitHandler = (event) => {
    event.preventDefault();
    const firstName = this.firstNameEl.current.value;
    const surname = this.surnameEl.current.value;
    const department = this.departmentEl.current.value;
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log({email, password, department, firstName, surname})
    // send request to the backend.
  }
  render () {
    return (
      <form className='auth-form' onSubmit={this.submitHandler}>
        <div className='form-control'>
          <label htmlFor="surname">Surname</label>
          <input type="surname" ref={this.surnameEl}/>
        </div>
        <div className='form-control'>
          <label htmlFor="firstName">First Name</label>
          <input type="firstName" ref={this.firstNameEl}/>
        </div>
        <div className='form-control'>
          <label htmlFor="department">Department</label>
          <input type="department" ref={this.departmentEl}/>
        </div>
        <div className='form-control'>
          <label htmlFor="email">Email</label>
          <input type="email" ref={this.emailEl}/>
        </div>
        <div className='form-control'>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl}/>
        </div>
        <div className='form-actions'>
          <button type="submit">Submit</button>
          <button type="button">Switch to Sign up</button>
        </div>
      </form>
    )
  }
}

export default AuthPage;
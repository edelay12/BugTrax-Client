import React, { Component } from 'react';
import './register.css'
export default class Register extends Component {
    state = { error: null }

    handleSubmit = e => {
e.preventDefault();
//check fields
//return to login


    }

    render(){
    const { error } = this.state;
    //check user available on key input
    return (
      <section className='Register-page'>
      <form className="Register" onSubmit={this.handleSubmit}>
        <h2 className='Register-title'>Register an account</h2>
        <div role="alert">
          {error && <p className="red"> {error} </p>}
        </div>
        <div className="Register-user">
          <label className='Register-label' htmlFor="Register-user-input">User name</label>
          <input required name="user_name" id="Register-user-input"></input>
        </div>
        <div className="Register-password">
          <label className='Register-label' htmlFor="Register-password-input">Password</label>
          <input
            required
            name="password"
            type="password"
            id="Register-password-input"
          ></input>
<br />
<label className='Register-label-bottom' htmlFor="Register-passwordRe-input">Confirm password</label>
<input
            required
            name="password"
            type="password"
            id="Register-passwordRe-input"
          ></input>
        </div>
        <button className='Register-submit-b' type="submit">Create account</button>
      </form>
      </section>
    );
    }
}
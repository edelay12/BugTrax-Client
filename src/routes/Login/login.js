import React, { Component } from 'react';
import './login.css'
export default class Login extends Component {
    state = {error: null}
    render(){
    const { error } = this.state;
    return (
      <section className='Login-page'>
      <form className="Login">
        <h2 className='Login-title'>Log in</h2>
        <div role="alert">
          {" "}
          {error && <p className="red"> {error} </p>}{" "}
        </div>{" "}
        <div className="Login-user">
          <label className='Login-label' htmlFor="LoginForm__user_name">User name: </label>{" "}
          <input required name="user_name" id="LoginForm__user_name"></input>{" "}
        </div>{" "}
        <div className="Login-password">
          <label className='Login-label' htmlFor="LoginFormPassword">Password: </label>{" "}
          <input
            required
            name="password"
            type="password"
            id="LoginFormPassword"
          ></input>{" "}
        </div>{" "}
        <button className='Login-submit-b' type="submit">Login</button>
      </form>
      </section>
    );
    }
}
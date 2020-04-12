import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './login.css';

export default class Login extends Component {
    state = {
      error: null,
      user_name: null,
      psw: null,
    }



    handleLogin = e => {
        e.preventDefault();
        
        const { user_name, password } = e.target;

        if(user_name == null || password == null) {
          return this.setState({ error: true});
        }

        this.setState({ error : null});

 
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value
        })
          .then(res => {
            user_name.value = "";
            password.value = "";
           
          })
          .catch(res => {
            this.setState({ error: res.error });
          });
    }

    render(){
    const { error } = this.state;
    return (
      <section className='Login-page'>
      <form className="Login" onSubmit={this.handleLogin}>
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
        <button className='Login-submit-b Radial-button' type="submit">Login</button>
      </form>
      </section>
    );
    }
}
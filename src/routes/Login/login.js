import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './login.css';
import SequenceFooter from '../../components/sequence-footer/sequence-footer';
import MainContext from '../../contexts/main-context';
import TeamsApiService from '../../services/teams-api-service';
import LandingHeader from '../../components/landing-page/header/header';
import LandingFooter from '../../components/landing-page/footer/footer';

export default class Login extends Component {
  static contextType = MainContext;
    state = {
      error: null,
      user_name: null,
      psw: null,
    }

    handleLogin = e => {
        e.preventDefault();
        this.setState({
          error: null
        });
        const { user_name, password } = e.target;
 
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value
        })
          .then(res => {
            console.log(res)
            user_name.value = "";
            password.value = "";
          //if no team.. 
//get token & user
this.props.history.push('/dashboard/overview');
this.context.setUserInfo(res);
        })
          .catch(res => {
            console.log(res.error)
            this.setState({ error: res.error });
          });
    }

    render(){
    const { error } = this.state;
    return (
      <>
      <LandingHeader />
      <main className='Login-page'>
      <form className="Login" onSubmit={this.handleLogin}>
        <h2 className='Login-title'>Log in</h2>
        <div role="alert">
          {error && <p className="red">{ error }</p>}{" "}
        </div>{" "}
        <div className="Login-user">
          <label className='Login-label' htmlFor="LoginForm__user_name">User name: </label>{" "}
          <input className='bt-input' required name="user_name" id="LoginForm__user_name"></input>{" "}
        </div>{" "}
        <div className="Login-password">
          <label className='Login-label' htmlFor="LoginFormPassword">Password: </label>{" "}
          <input
          className='bt-input'
            required
            name="password"
            type="password"
            id="LoginFormPassword"
          ></input>{" "}
        </div>{" "}
        <button className='Login-submit-b Radial-button' type="submit">Login</button>
      </form>
      </main>
      </>
    );
    }
}
import React from "react";
import { useForm } from "react-hook-form";
import "./register-form.css";
import LandingHeader from "../landing-page/header/header";

export default function RegisterForm({ onSubmit }) {
  const { register, handleSubmit, errors, getValues } = useForm();
  return (
    <section className="Register-page">
      <form className="Register" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="Register-title">Register an account</h2>
        <div className="Register-user">
          <label className="Register-label" htmlFor="Register-user-input">
            Full name
          </label>
          <input
            className="bt-input"
            required
            name="full_name"
            id="Register-user-input"
            ref={register}
          ></input>
        </div>
        <div className="Register-user">
          <label className="Register-label" htmlFor="Register-user-input">
            Title
          </label>
          <input
            className="bt-input"
            required
            name="title"
            id="Register-user-input"
            ref={register}
          ></input>
        </div>
        <div role="alert">
          {errors.user_name && (
            <p className="red">Invalid username or is taken</p>
          )}
        </div>
        <div className="Register-user">
          <label className="Register-label" htmlFor="Register-name-input">
            User name
          </label>
          <input
            className="bt-input"
            required
            name="user_name"
            id="Register-name-input"
            ref={register}
          ></input>
        </div>
        <div className="Register-password">
          {errors.password && (
            <div className="error-div" role="alert">
              <p className="red">Password required:</p>
              <ul className="error-list">
                <li>At least 1 special character and number</li>
                <li>At least 1 uppercase letter</li>
                <li>Be longer than 10 characters</li>
              </ul>
            </div>
          )}
          <label className="Register-label" htmlFor="Register-password-input">
            Password
          </label>
          <input
            className="bt-input"
            required
            name="password"
            type="password"
            id="Register-password-input"
            ref={register({
              pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/,
              minLength: 10
            })}
          ></input>
          <br />
          <label
            className="Register-label-bottom"
            htmlFor="Register-passwordRe-input"
          >
            Confirm password
          </label>
          <input
            className="bt-input"
            required
            name="passwordRepeat"
            type="password"
            id="Register-passwordRe-input"
            ref={register({
              validate: {
                matchesPreviousPassword: value => {
                  const { password } = getValues();
                  return password === value || "Passwords should match";
                }
              }
            })}
          ></input>
        </div>
        {errors.passwordRepeat && (
          <p className="red">{errors.passwordRepeat.message}</p>
        )}
        <button className="Register-submit-b Radial-button" type="submit">
          Create account
        </button>
      </form>
    </section>
  );
}

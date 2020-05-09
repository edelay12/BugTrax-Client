import React, { useContext } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import RegisterForm from "../../components/register-form/register-form";
import ImageUpload from "../image-upload/image-upload";
import AuthApiService from "../../services/auth-api-service";
import MainContext from "../../contexts/main-context";
import LandingHeader from "../../components/landing-page/header/header";

export default function Register(props) {
  const ContextMain = useContext(MainContext);

  const onSubmit = DATA => {
    //check fields
    //return to login
    AuthApiService.postUser(DATA)
      .then(user => {
        ContextMain.setUser(user);
      })
      .then(props.history.push("/login"))
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <LandingHeader />
      <Route
        exact
        path={"/register"}
        render={props => <RegisterForm onSubmit={onSubmit} />}
      />
      <Route
        exact
        path={"/register/photo"}
        render={props => <ImageUpload user={ContextMain.user} />}
      />
    </React.Fragment>
  );
}

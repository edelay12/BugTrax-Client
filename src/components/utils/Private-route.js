import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? 
         (TokenService._getUserInfo(TokenService.readJwtToken()).teamId === null ? <Redirect
         to={{
           pathname: "/team-join",
           state: { from: componentProps.location }
         }}
  /> : <Component {...componentProps} /> )
         : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: componentProps.location }
            }}
          />
        )
      }
    />
  );
}

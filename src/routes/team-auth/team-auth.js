import React, { useEffect, useState, useContext } from "react";
import "./team-auth.css";
import { Redirect, withRouter } from "react-router-dom";
import LandingHeader from "../../components/landing-page/header/header";
import TeamsApiService from "../../services/teams-api-service";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import MainContext from "../../contexts/main-context";

function TeamAuth(props) {
  const ContextMain = useContext(MainContext);
  const [id, setId] = useState(0);
  const [name, setName] = useState(0);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!TokenService.hasAuthToken()) {
      props.history.push("/login");
    }
    const { teamId, teamName } = props.match.params;
    setId(teamId);
    setName(teamName);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {};
    let input = e.target.passwordInput.value;
    if (!input || input === "") {
      return setError(true);
    }
    setError(false);
    console.log(input);
    //submit team password to team id
    data.team_id = id;
    data.password_input = input;
    data.user_id = TokenService._getUserId(TokenService.readJwtToken());

    AuthApiService.postTeamAuth(data)
      .then(res => {
        console.log(res);
        ContextMain.setUserInfo(res);
        props.history.push("/dashboard/overview");
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <LandingHeader />
      <section className="Team-auth">
        <form className="Team-auth-form" onSubmit={handleSubmit}>
          <h2 className="Team-auth-label">Selected Team ({name})</h2>
          <label htmlFor="Team-auth-i" className="Team-auth-dir">
            Please enter the password to join team {name}
          </label>
          {error && (
            <span className="Team-auth-e-alert">Password must be entered</span>
          )}
          <input
            className="Team-auth-i bt-input"
            type="password"
            name="passwordInput"
            placeholder="Please enter password..."
          />
          <button className="Team-auth-button Radial-button" type="submit">
            Submit
          </button>
        </form>

        <div className="Demo-password-dir">
          <b>Demo team password:</b> <br />
           <mark>Guest2021!</mark>
        </div>
      </section>
    </React.Fragment>
  );
}

export default withRouter(TeamAuth);

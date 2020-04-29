import React, { useEffect, useState } from "react";
import "./team-auth.css";
import LandingHeader from "../../components/landing-page/header/header";

export default function TeamAuth(props) {
  const [id, setId] = useState(0);
  const [name, setName] = useState(0);
  const [passwordInput, updatePassword] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const { teamId, teamName } = props.match.params;
    console.log(teamId);
    setId(teamId);
    setName(teamName);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!passwordInput) {
      return setError(true);
    }
    setError(false);


    //submit team password to team id

   // check token service? 
    console.log("submit");
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
          className="Team-auth-i"
          type="text"
          name="passwordInput"
          placeholder="Please enter password..."
          onChange={e => updatePassword(e.target.value)}
        />
        <button className="Team-auth-button Radial-button" type="submit">
          Submit
        </button>
      </form>
    </section>
    </React.Fragment>
  );
}

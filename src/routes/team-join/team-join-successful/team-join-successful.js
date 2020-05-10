import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import "./team-join-successful.css";
import LandingHeader from "../../../components/landing-page/header/header";

export default function TeamJoinSuccessful(props) {
  const [id, setId] = useState(0);
  const [name, setName] = useState(0);

  useEffect(() => {
    const { teamId, teamName } = props.match.params;
    setId(teamId);
    setName(teamName);
  }, []);

  const handleClick = () => {
  };
  return (
    <React.Fragment>
      <LandingHeader />
      <section className="Team-join-successful">
        <div className="Tjs">
          <h2 className="Tjs-banner">Success</h2>
          <div className="green-logo-div">
            <FontAwesomeIcon className="green-logo" icon={faCheckCircle} />
          </div>
          <h2 className="Tjs-banner">You were added to team {name}</h2>

          <div className="Tjs-dashboard-link">
            <button
              className="Tjs-continue-b Radial-button"
              onClick={() => handleClick()}
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

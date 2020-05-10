import React, { Component, useEffect, useState } from "react";
import TeamsApiService from "../../services/teams-api-service";
import "./team-join.css";
import TeamSearch from "../../components/team-search-input/ts-input";
import TeamRegister from "../../components/team-register/team-register";
import LandingHeader from "../../components/landing-page/header/header";

export default function TeamJoin() {
  const [register, showRegister] = useState(false);
  return (
    <React.Fragment>
      <LandingHeader />
      <main className="Team-join">
        <div className="Team-choose">
          {register ? (
            <TeamRegister />
          ) : (
            <div>
              <h2 className="Team-choose-dir">Please join a team</h2>
              <div className="Tc-search-container">
                <TeamSearch />
              </div>
              <h2 className="Team-choose-dir2">...or register a new one</h2>
              <button
                type="button"
                className="Team-choose-register-b Radial-button"
                onClick={() => showRegister(true)}
              >
                Register a team
              </button>
            </div>
          )}
        </div>
      </main>
    </React.Fragment>
  );
}

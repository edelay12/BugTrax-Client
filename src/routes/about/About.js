import React from "react";
import "./About.css";
import { faBurn } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import LandingFooter from "../../components/landing-page/footer/footer";
import Particles from "react-particles-js";
import LandingBg from "../../components/landing-page/landing-bg/landing-bg";

export default function About() {
  return (
    <div className="About-page">
      <header className="About-header">
        <div className="About-main-logo-container">
          <Link to={"/landing"}>
            <span className="About-main-logo">
              <FontAwesomeIcon icon={faBurn} /> BugTrax
            </span>
          </Link>
        </div>
      </header>
      <main role="main" className="About-main">
        <div className="About-dir">
          <h2 className="About-title">Welcome to BugTrax</h2>
          <h4 className="About-sub-title">
            This project was created by Evan Miller
          </h4>
        </div>
        <div className="detailsRow">
          <p>
            This project is a bug/issue management tracking system built using{" "}
            <b>React </b>, <b>CSS</b>, <b>Node</b>, <b>Express</b>, and{" "}
            <b>PostgreSQL</b>. ...mantisbt
          </p>
        </div>
        <div className="About-get-started">
          <ul id="centerText">To get started</ul>
          <span>
            The best way to demo the site is to click 'View BugTrax' below, and
            then click the login button at the top of the site. Use the demo
            login
            <br />
            <br />
            <b>User:</b> <mark>jApple</mark>
            <br />
            <b>Password:</b> <mark>Guest2021!</mark>
            <br />
            <br />
            or...
            <br />
            <br />
            Click on the "Get Started Now" button and make your own account and
            team.
          </span>
        </div>
        <div className="About-button-container">
          <Link to="/landing">
            <button className="About-landing-link Radial-button">
              View BugTrax
            </button>
          </Link>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}

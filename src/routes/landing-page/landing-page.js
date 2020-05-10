import React, { useEffect, useState } from "react";
import "./landing-page.css";
import typer from "typer-js";
import { Link } from "react-router-dom";
import TeamSearch from "../../components/team-search-input/ts-input";
import { SvgCode, SvgMessages } from "../../components/landing-page/svg/svg";
import LandingHeader from "../../components/landing-page/header/header";
import LandingFooter from "../../components/landing-page/footer/footer";
import Particles from "react-particles-js";
import LandingBg from "../../components/landing-page/landing-bg/landing-bg";

export default function LandingPage() {
  useEffect(() => {
    typer(".Landing-banner")
      .line("The new way of bug killing")
      .line("for front-end developers")
      .pause(2000)
      .back(20, 20)
      .pause(1000)
      .continue("designers")
      .pause(2000)
      .back(9, 20)
      .pause(1000)
      .continue("project managers")
      .pause(2000);
  }, []);

  return (
    <div className="Landing-page">
      <div className="Landing-page-border">
        <LandingHeader />
        <main className="Landing-main">
          <section className="Landing-banner-container">
            <div className="Banner-frame">
              <h1 className="Landing-banner"></h1>
              <span className="Landing-dir">
                Track and maintain everything in your projects.
                <br />
                Act in real-time when things go south.
              </span>
              <TeamSearch />
            </div>
          </section>
          <section className="Landing-body-container">
            <div className="lBody-frame frame">
              <SvgCode />
              <h3 className="landing-card-sub">
                Stay on top of current, past, and in-progress bug reports
              </h3>
            </div>
            <div className="rBody-frame no-svg frame">
              <h3 className="landing-card-title">Enjoy pure freedom</h3>
              <h4 className="landing-card-sub">
                Choose the events you want to track yourself. No need to pick
                them from a list used by every dev in the universe. Break your
                chains!
              </h4>
            </div>
            <div className="lBody-frame frame-yellow frame">
              <SvgMessages />
              <h3 className="landing-card-sub">
                Chat in real time with members on your team. All of your
                conversations in one place!
              </h3>
            </div>
            <div className="signup-container">
              <h1 className="signup-banner-h1">
                The new way of bug killing
                <br />
                for everyone
              </h1>
              <button className="Links-getStarted">
                <Link to="/register">Create Account</Link>
              </button>
            </div>
          </section>
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}

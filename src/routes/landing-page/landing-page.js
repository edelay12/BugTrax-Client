import React, { useEffect, useState } from "react";
import "./landing-page.css";
import typer from "typer-js";
import { Link } from "react-router-dom";
import TeamSearch from "../../components/team-search-input/ts-input";
import { SvgCode } from "../../components/landing-page/svg/svg";
import LandingHeader from "../../components/landing-page/header/header";
import LandingFooter from "../../components/landing-page/footer/footer";
import Particles from "react-particles-js";


export default function LandingPage(){

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
        <div className='Landing-page-border'>
        <LandingHeader />
        <main className="Landing-main">
        <Particles className='bug-bg'
      params={{
        "fps_limit": 28,
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 30,
                "opacity": 0.4
            },
            "move": {
                "speed": 1
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "opacity_min": 0.05,
                    "speed": 2,
                    "sync": false
                },
                "value": 0.4
            }
        },
        "polygon": {
            "enable": true,
            "scale": 0.5,
            "type": "inline",
            "move": {
                "radius": 10
            },
            "url": "/Users/evanmiller/Documents/BLOC Projects/bugtrax/src/routes/landing-page/cockroach.svg",
            "inline": {
                "arrangement": "equidistant"
            },
            "draw": {
                "enable": true,
                "stroke": {
                    "color": "rgba(255, 255, 255, .2)"
                }
            }
        },
        "retina_detect": false,
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                }
            },
            "modes": {
                "bubble": {
                    "size": 6,
                    "distance": 40
                }
            }
        }
    }} />
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
              <h3 className="landing-card-sub">Stay on top of current, past, and in-progress bug reports</h3>
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
            <SvgCode />
              <h3 className='landing-card-sub'>Stay on top of current, past, and in-progress bug reports</h3>
            </div>
            <div className="signup-container">
            <h1 className='signup-banner-h1'>The new way of bug killing<br />for everyone</h1> 
            <button className='Links-getStarted'><Link to="/register">Get Started</Link></button>
            </div>
          </section>
        </main>
        <LandingFooter />
        </div>
      </div>
    );
  }


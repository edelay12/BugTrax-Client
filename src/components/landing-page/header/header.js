import React, { useState } from "react";
import { faBurn } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BurgerIcon from "../burger-icon/burger-icon";
import "./header.css";
import TokenService from "../../../services/token-service";

export default function LandingHeader() {
  const [menu, isOpen] = useState(false);

  return (
    <header className="Landing-header">
      <div className="Landing-logo-container">
        <Link to={"/landing"}>
          <span className="Landing-logo">
            <FontAwesomeIcon icon={faBurn} /> BugTrax
          </span>
        </Link>
      </div>
      <div
        className={
          menu ? "Landing-links-container-open" : "Landing-links-container"
        }
      >
        <span className="Links Links-about">
          <Link to="/">About</Link>
        </span>
        <span className="Links Links-login">
          {TokenService.hasAuthToken() ? (
            <Link to="/" onClick={() => TokenService.clearAuthToken()}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </span>
        <span className="Links Links-getStarted">
          <Link to="/register">Create Account</Link>
        </span>
      </div>
      <BurgerIcon menu={menu} isOpen={isOpen} />
    </header>
  );
}

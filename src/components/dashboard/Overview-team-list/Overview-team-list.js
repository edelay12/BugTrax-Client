import React, { useContext } from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import MainContext from "../../../contexts/main-context";
import "./overview-team-list.css";
import getUserPhoto from "./get-user-photo/get-user-photo";

export default function OverviewTeamList({ setPartnerId }) {
  const ContextMain = useContext(MainContext);
  let { path, url } = useRouteMatch();

  return (
    <div className="Overview-team-list">
      <ul className="team-list-ul">
        {ContextMain.teamList.map(user => (
          <li className="team-list-li">
            <img src={getUserPhoto(user.id)} className="team-li-pic" />
            <div className="team-li-container">
              <div className="team-li-details">
                <span className="team-li-name">{user.full_name}</span>
                <span className="team-li-title">{user.title}</span>
              </div>
              <span
                className="team-li-message"
                onClick={() => setPartnerId(user.id)}
              >
                <Link to={`/dashboard/team`}>Chat</Link>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

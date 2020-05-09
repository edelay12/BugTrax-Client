import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import UserApiService from "../../services/user-api-service";
import DashboardRouteHeader from "../../components/dashboard/dashboard-route-header/dashboard-route-header";
import getUserPhoto from "../../components/dashboard/Overview-team-list/get-user-photo/get-user-photo";
import "./profile.css";

function Profile({ match }) {
  const [user, setUser] = useState({ full_name: "", user_name: "", title: "" });
  const { userId } = match.params;

  useEffect(() => {
    UserApiService.getUser(userId)
      .then(res => {
        console.log(res);
        setUser(res[0]);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="profile-page">
      <DashboardRouteHeader title="Profile" />
      <section className="profile-content">
        <img
          src={getUserPhoto(userId)}
          alt="user_img"
          className="profile-user-photo"
        />
        <div>
          <h4>Name: </h4>
          <span>{user.full_name}</span>
        </div>
        <div>
          <h4>Title: </h4>
          <span>{user.title}</span>
        </div>
        <div>
          <h4>Username: </h4>
          <span>{user.user_name}</span>
        </div>
      </section>
    </div>
  );
}

export default withRouter(Profile);

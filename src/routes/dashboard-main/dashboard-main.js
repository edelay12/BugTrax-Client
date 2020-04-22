import React, { Component, useEffect, useState, useContext } from "react";
import { Route, Switch, useRouteMatch, match, NavLink } from "react-router-dom";
import Overview from "./overview/dashboard-overview";
import "./dashboard-main.css";
import Issues from "./issues/dashboard-issues";
import IssuePage from "../issue-page/issue-page";
import SubmitIssueForm from "../../components/submit-issue-form/submit-issue-form";
import TeamChat from "./chat/chat";
import TeamsApiService from "../../services/teams-api-service";
import TeamTrends from "./trends/trends";
import MainContext from "../../contexts/main-context";
import IssueApiService from "../../services/issues-api-service";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import DashboardFooter from "../../components/dashboard/dashboard-footer/dashboard-footer";
import EventsApiService from "../../services/issue-events-api-service";

export default function Dashboard({ match }) {
  const ContextMain = useContext(MainContext);

  let { path, url } = useRouteMatch();
  let { teamId } = match.params;
  let [sidebar, sIsOpen] = useState(true);
  let [sif, showSif] = useState(false);
  const [partnerId, setPartnerId] = useState(null);

  useEffect(() => {
    if(window.innerWidth <= 812) {
        sIsOpen(false);
    }
    
    //get team member list
    TeamsApiService.getTeamUserList(2)
      .then(users => ContextMain.setTeamList(users))
      .catch(err => console.log(err));

    //get issues
    IssueApiService.getIssuesByTeamId(2)
      .then(issues => {
        console.log(issues);
        ContextMain.setTeamIssues(issues);
      })
      .catch(err => console.log(err));

      IssueApiService.getActiveIssues(2)
      .then(issues => {
        console.log(issues);
        ContextMain.setActiveIssues(issues);
      })
      .catch(err => console.log(err));

      IssueApiService.getResolvedIssues(2)
      .then(issues => {
        console.log(issues);
        ContextMain.setResolvedIssues(issues);
      })
      .catch(err => console.log(err));

      EventsApiService.getEventsByTeamId(2)
      .then(events => {
        console.log(events);
        ContextMain.setTimeline(events);
      })
      .catch(err => console.log(err));


  },[]);

  return (
    <div className={sidebar ? "Dashboard" : "Dashboard-closed"}>
      <Header sidebar={sidebar} sIsOpen={sIsOpen} showSif={() => showSif(true)} />
      <Sidebar url={url} sidebar={sidebar} sIsOpen={sIsOpen} />
      <section className="Dashboard-main">
        {/* pass team id in route params from props */}
        <Route
          exact
          path={`${path}/overview`}
          render={props => <Overview setPartnerId={setPartnerId} teamId={teamId} />}
        />
        <Route
          exact
          path={`${url}/issues`}
          render={props => (
            <Issues toggleSif={() => showSif(!sif)} teamId={teamId} />
          )}
        />
        <Route
          exact
          path={`${url}/team`}
          render={props => <TeamChat partnerId={partnerId} setPartnerId={setPartnerId} teamId={teamId} />}
        />
        <Route
          exact
          path={`${url}/trends`}
          render={props => <TeamTrends teamId={teamId} />}
        />
        <Route
         exact
          path={`${url}/issues/:issueId`}
          component={IssuePage}
        />
        {sif && <SubmitIssueForm closeSif={() => showSif(false)} />}
        <DashboardFooter />
      </section>
    </div>
  );
}

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
import TokenService from "../../services/token-service";
import Profile from "../profile/profile";

export default function Dashboard({ match }) {
  const ContextMain = useContext(MainContext);

  const { path, url } = useRouteMatch();
  const { teamId } = match.params;
  const [sidebar, sIsOpen] = useState(true);
  const [sif, showSif] = useState(false);
  const [dropdown, showDropdown] = useState(false);
  const [partnerId, setPartnerId] = useState(null);

  useEffect(() => {
    if (window.innerWidth <= 812) {
      sIsOpen(false);
    }
    const team_id = TokenService._getUserInfo(TokenService.readJwtToken())
      .teamId;
    //get team member list
    TeamsApiService.getTeamUserList(team_id)
      .then(users => ContextMain.setTeamList(users))
      .catch(err => console.log(err));

    //get issues
    IssueApiService.getIssuesByTeamId(team_id)
      .then(issues => {
        ContextMain.setTeamIssues(issues);
      })
      .catch(err => console.log(err));

    IssueApiService.getActiveIssues(team_id)
      .then(issues => {
        ContextMain.setActiveIssues(issues);
      })
      .catch(err => console.log(err));

    IssueApiService.getResolvedIssues(team_id)
      .then(issues => {
        ContextMain.setResolvedIssues(issues);
      })
      .catch(err => console.log(err));

    EventsApiService.getEventsByTeamId(team_id)
      .then(events => {
        ContextMain.setTimeline(events);
      })
      .catch(err => console.log(err));

 /*   TeamsApiService.getTeamName(
      TokenService._getUserId(TokenService.readJwtToken())
    )
      .then(res => {
        ContextMain.setTeamName(res)
      })
      .catch(err => console.log(err)); */
      ContextMain.setTeamName(TokenService._getUserInfo(TokenService.readJwtToken()).team_name)


  }, []);

  return (
    <div className={sidebar ? "Dashboard" : "Dashboard-closed"}>
      <Header
        sidebar={sidebar}
        sIsOpen={sIsOpen}
        showSif={() => showSif(true)}
        dropdown={dropdown}
        showDropdown={showDropdown}
        teamName={ContextMain.teamName}
      />
      <Sidebar url={url} sidebar={sidebar} sIsOpen={sIsOpen} />
      <section
        className="Dashboard-main"
        onClick={() => (dropdown ? showDropdown(false) : null)}
      >
        {/* pass team id in route params from props */}
        <Route
          exact
          path={`/dashboard/overview`}
          render={props => (
            <Overview setPartnerId={setPartnerId} teamId={teamId} />
          )}
        />
        <Route
          exact
          path={`/dashboard/issues`}
          render={props => (
            <Issues toggleSif={() => showSif(!sif)} teamId={teamId} />
          )}
        />
        <Route
          exact
          path={`/dashboard/team`}
          render={props => (
            <TeamChat
              partnerId={partnerId}
              setPartnerId={setPartnerId}
              teamId={teamId}
            />
          )}
        />
        <Route
          exact
          path={`/dashboard/trends`}
          render={props => <TeamTrends teamId={teamId} />}
        />
        <Route
          exact
          path={`/dashboard/issues/:issueId`}
          component={IssuePage}
        />
        <Route
          exact
          path={`/dashboard/profile/:userId`}
          render={props => <Profile user={teamId} />}
        />
        {sif && <SubmitIssueForm closeSif={() => showSif(false)} />}
        <DashboardFooter />
      </section>
    </div>
  );
}

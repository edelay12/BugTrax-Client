import React, { Component } from "react";
import Collapsible from "react-collapsible";
import "./dashboard-overview.css";
import { Trigger } from "../../../components/utils/utils";
import OverviewCards from "../../../components/dashboard/Overview-cards/overview-cards";
import {
  faUsers,
} from "@fortawesome/fontawesome-free-solid";
import { faChartBar } from "@fortawesome/fontawesome-free-regular";
import DashboardRouteHeader from "../../../components/dashboard/dashboard-route-header/dashboard-route-header";
import OverviewTeamList from "../../../components/dashboard/Overview-team-list/Overview-team-list";
import MainContext from "../../../contexts/main-context";
import SequenceFooter from "../../../components/sequence-footer/sequence-footer";
import DashboardFooter from "../../../components/dashboard/dashboard-footer/dashboard-footer";
import OverviewActiveIssues from "../../../components/dashboard/overview-issue-frames/active/overview-active-issues";
import OverviewResolvedIssues from "../../../components/dashboard/overview-issue-frames/resolved/overview-resolved-issues";
import OverviewRecentlyModIssues from "../../../components/dashboard/overview-issue-frames/recently-modified/overview-recently-modified-issues";
import OverviewTimeline from "../../../components/dashboard/overview-timeline/overview-timeline";

export default class Overview extends Component {
  static contextType = MainContext;
  state = { error: null };

  render() {
    const { error } = this.state;
    //move error to dash main
    //check user available on key input
    return (
      <div className="Overview">
        <DashboardRouteHeader title="Overview" />
        <OverviewCards />
        <section className="Overview-row">
          <div className="Overview-analytics">
            <Collapsible
              open={true}
              trigger={
                <Trigger
                  name="Analytics"
                  icon={faChartBar}
                  iconClass="analytics-icon"
                />
              }
            >
              <div className="Overview-issues-frame">
                <div className="O-issue">
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </div>
              </div>
            </Collapsible>{" "}
          </div>
          <div className="Overview-team">
            <Collapsible
              open={true}
              trigger={
                <Trigger name="Team" icon={faUsers} iconClass="team-icon" />
              }
            >
              <div className="Overview-team-frame">
                <OverviewTeamList setPartnerId={this.props.setPartnerId} />
              </div>
            </Collapsible>
          </div>
        </section>

    <OverviewActiveIssues />
        <section className="Overview-row">
          <section className="Overview-issues-container">
        <OverviewResolvedIssues />
          </section>
          <section className="Overview-timeline">
         <OverviewTimeline />
          </section>
        </section>
      </div>
    );
  }
}

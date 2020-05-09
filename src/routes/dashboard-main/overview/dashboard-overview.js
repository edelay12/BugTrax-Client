import React, { Component } from "react";
import Collapsible from "react-collapsible";
import "./dashboard-overview.css";
import { Trigger } from "../../../components/utils/utils";
import OverviewCards from "../../../components/dashboard/Overview-cards/overview-cards";
import { faUsers } from "@fortawesome/fontawesome-free-solid";
import { faChartBar } from "@fortawesome/fontawesome-free-regular";
import DashboardRouteHeader from "../../../components/dashboard/dashboard-route-header/dashboard-route-header";
import OverviewTeamList from "../../../components/dashboard/Overview-team-list/Overview-team-list";
import MainContext from "../../../contexts/main-context";
import OverviewActiveIssues from "../../../components/dashboard/overview-issue-frames/active/overview-active-issues";
import OverviewResolvedIssues from "../../../components/dashboard/overview-issue-frames/resolved/overview-resolved-issues";
import OverviewTimeline from "../../../components/dashboard/overview-timeline/overview-timeline";
import IssuesPieChart from "../../../components/charts/issues-pie-chart";
import NewIssuesLineChart from "../../../components/charts/new-issues-line-chart";

export default class Overview extends Component {
  static contextType = MainContext;
  state = { error: null };

  render() {
    const { error } = this.state;
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
              <div className="Pie-chart-frame">
                {/*<IssuesPieChart />  */}
                <NewIssuesLineChart />
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

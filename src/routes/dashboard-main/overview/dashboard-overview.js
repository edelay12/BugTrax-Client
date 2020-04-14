import React, { Component } from "react";
import Collapsible from "react-collapsible";
import "./dashboard-overview.css";
import { Trigger } from "../../../components/utils/utils";
import TimelineEvent from "../../../components/timeline-event/timeline-event";
import OverviewCards from "../../../components/dashboard/Overview-cards/overview-cards";
import {
  faUsers,
  faHourglassHalf,
  faHistory,
  faHourglass
} from "@fortawesome/fontawesome-free-solid";
import { faChartBar } from "@fortawesome/fontawesome-free-regular";
import DashboardRouteHeader from "../../../components/dashboard/dashboard-route-header/dashboard-route-header";
import OverviewTeamList from "../../../components/dashboard/Overview-team-list/Overview-team-list";
import MainContext from "../../../contexts/main-context";
import SequenceFooter from "../../../components/sequence-footer/sequence-footer";
import DashboardFooter from "../../../components/dashboard/dashboard-footer/dashboard-footer";

export default class Overview extends Component {
  static contextType = MainContext;
  state = { error: null };

  componentDidMount() {
    console.log(this.props.teamId);
  }

  render() {
    const { error } = this.state;
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
                {/*map contxt issues */ this.context.teamIssues.map(issue => (
                  <div className="O-issue">
                    <span>{issue.summary}</span>
                  </div>
                ))}
                <div className="O-issue">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                </div>

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
              <div className="Overview-issues-frame">
                <OverviewTeamList />
              </div>
            </Collapsible>
          </div>
        </section>

        <Collapsible
          open={true}
          trigger={
            <Trigger
              name="Active"
              icon={faHourglassHalf}
              iconClass="active-icon"
            />
          }
        >
          <div className="Overview-issues-frame">
            <div className="O-issue">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </div>

            <div className="O-issue">
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </div>
          </div>
        </Collapsible>

        <section className="Overview-row">
          <section className="Overview-issues-container">
            <Collapsible
              open={true}
              trigger={
                <Trigger
                  name="Resolved"
                  icon={faHourglass}
                  iconClass="resolved-icon"
                />
              }
            >
              <div className="Overview-issues-frame">
                <div className="O-issue">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                </div>

                <div className="O-issue">
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </div>
              </div>
            </Collapsible>

            <Collapsible
              open={true}
              trigger={
                <Trigger
                  name="Recently modified"
                  icon={faHistory}
                  iconClass="modified-icon"
                />
              }
            >
              <div className="Overview-issues-frame">
                <div className="O-issue">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                </div>

                <div className="O-issue">
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </div>
              </div>
            </Collapsible>
          </section>
          <section className="Overview-timeline">
            <Collapsible
              open={true}
              trigger={
                <Trigger
                  name="Timeline"
                  icon={faHistory}
                  iconClass="modified-icon"
                />
              }
            >
              <div className="Overview-issues-frame">
                <TimelineEvent />
                <TimelineEvent />
                <TimelineEvent />
                <TimelineEvent />
              </div>
            </Collapsible>
          </section>
        </section>
      </div>
    );
  }
}

import React from "react";
import "./chat.css";
import TeamCard from "../../../components/chat/team-card/team-card";
import CReciever from "../../../components/chat/chat-reciever/chat-reciever";
import CSender from "../../../components/chat/chat-sender/chat-sender";
import DashboardRouteHeader from "../../../components/dashboard/dashboard-route-header/dashboard-route-header";
import OverviewTeamList from "../../../components/dashboard/Overview-team-list/Overview-team-list";

export default function TeamChat() {
  return (
    <section className="Team">
      <DashboardRouteHeader title="Chat" />

      <section className="Team-chat">
        <div className="Team-list">
          <OverviewTeamList />
        </div>
        <div className="Team-display">
          <div className="Chat-display">
            <div className="Chat-box">
              <section className="Messages-container">
                <CReciever />
                <CReciever />
                <CReciever />
                <CSender />
                <CReciever />

                <CSender />
                <CSender />
                <CSender />
              </section>
            </div>
          </div>
          <div className="Message-input-container">
            <textarea className="New-message-i" placeholder="Type message..." />
            <button type="submit" className="New-message-b Radial-button">
              Send
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

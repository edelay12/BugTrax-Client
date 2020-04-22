import React, {useEffect, useState} from "react";
import "./chat.css";
import TeamCard from "../../../components/chat/team-card/team-card";
import CReciever from "../../../components/chat/chat-reciever/chat-reciever";
import CSender from "../../../components/chat/chat-sender/chat-sender";
import DashboardRouteHeader from "../../../components/dashboard/dashboard-route-header/dashboard-route-header";
import OverviewTeamList from "../../../components/dashboard/Overview-team-list/Overview-team-list";
import MessagesContainer from "../../../components/chat/messages-container/messages-container";
import ChatApiService from "../../../services/chat-api-service";

export default function TeamChat({partnerId, setPartnerId}) {
const [messages, setMessages] = useState([]);
useEffect(() => {
 // get message list
console.log(partnerId)
ChatApiService.getMessagesByUser(partnerId)
.then(res => setMessages(res))
.catch(err => console.log(err));

// start timer
const timer = setInterval(() => {
  console.log('This will run after 30 second!')
  ChatApiService.getMessagesByUser(partnerId)
  .then(res => setMessages(res))
  .catch(err => {
    console.log(err)
    clearInterval(timer);
  })
}, 30000);
return () => clearInterval(timer);
// clear timer on compnonet did unmount
},[partnerId])


    const handleNewMessageSend = () => {
        
    }

  return (
    <section className="Team">
      <DashboardRouteHeader title="Chat" />

      <section className="Team-chat">
        <div className="Team-list">
          <OverviewTeamList setPartnerId={setPartnerId}/>
        </div>
        <div className="Team-display">
          <div className="Chat-display">
            <div className="Chat-box">
           <MessagesContainer messages={messages} />
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

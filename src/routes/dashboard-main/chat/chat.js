import React, { useEffect, useState } from "react";
import "./chat.css";
import DashboardRouteHeader from "../../../components/dashboard/dashboard-route-header/dashboard-route-header";
import OverviewTeamList from "../../../components/dashboard/Overview-team-list/Overview-team-list";
import MessagesContainer from "../../../components/chat/messages-container/messages-container";
import ChatApiService from "../../../services/chat-api-service";
import TokenService from "../../../services/token-service";

export default function TeamChat({ partnerId, setPartnerId }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // get message list
    let getPartnerId = partnerId == undefined ? 1 : partnerId;
    ChatApiService.getMessagesByUser(getPartnerId)
      .then(res => {
        setMessages(res);
      })
      .catch(err => console.log(err));

    // start timer
    const timer = setInterval(() => {
      ChatApiService.getMessagesByUser(partnerId)
        .then(res => setMessages(res))
        .catch(err => {
          console.log(err);
          clearInterval(timer);
        });
    }, 30000);
    return () => clearInterval(timer);
  }, [partnerId]);

  const handleNewMessageSend = data => {
    data.preventDefault();
    const newMessage = {
      message: data.target.newMessage.value,
      user_id_sender: TokenService._getUserId(TokenService.readJwtToken()),
      user_id_reciever: partnerId
    };
    ChatApiService.postNewMessage(newMessage)
      .then(res => {
        setMessages(res);
      })
      .catch(err => console.log(err));

    data.target.newMessage.value = "";
  };

  return (
    <section className="Team">
      <DashboardRouteHeader title="Chat" />
      <section className="Team-chat">
        <div className="Team-list">
          <OverviewTeamList setPartnerId={setPartnerId} />
        </div>
        <div className="Team-display">
          <div className="Chat-display">
            <div className="Chat-box">
              <MessagesContainer messages={messages} />
            </div>
          </div>
          <form
            className="Message-input-container"
            onSubmit={handleNewMessageSend}
          >
            <textarea
              className="New-message-i"
              placeholder="Type message..."
              name="newMessage"
            />
            <button type="submit" className="New-message-b Radial-button">
              Send
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

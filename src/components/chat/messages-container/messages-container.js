import React, { useContext } from "react";
import MainContext from "../../../contexts/main-context";
import CReciever from "../chat-reciever/chat-reciever";
import CSender from "../chat-sender/chat-sender";
import "./messages-container.css";
import TokenService from "../../../services/token-service";

export default function MessagesContainer({ messages }) {
  const id = TokenService._getUserId(TokenService.readJwtToken());
  return (
    <section className="Messages-container">
      {messages.length == 0 ? (
        <span className="No-messages-found">No messages found</span>
      ) : (
        messages.map(v =>
          v.user_id_sender == id ? (
            <CSender message={v.message} />
          ) : (
            <CReciever message={v.message} />
          )
        )
      )}
    </section>
  );
}

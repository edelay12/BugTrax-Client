import React from "react";
import "./chat-reciever.css";

export default function CReciever({ message }) {
  return (
    <div className="Message-reciever-bubble">
      <div className="Reciever-message">
        <span className="message">{message}</span>
      </div>
    </div>
  );
}

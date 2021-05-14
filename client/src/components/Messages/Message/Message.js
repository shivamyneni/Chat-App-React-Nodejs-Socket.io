import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isCurrentUser = true;
  }

  return isCurrentUser ? (
    <div id="currentUser">
      <h6 className="curruser">{trimmedName}</h6>
      <p className="Msg1">{ReactEmoji.emojify(text)}</p>
    </div>
  ) : (
    <div id="AnotherUser">
      <p className="Msg2">{ReactEmoji.emojify(text)}</p>
      <h6 className="Anothuser">{user}</h6>
    </div>
  );
};
export default Message;

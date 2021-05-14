import React from "react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import querystring from "query-string";
import InfoBar from "../Infobar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import "./chat.css";
let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const port = "http://localhost:8000/";

  useEffect(() => {
    const { name, room } = querystring.parse(location.search);
    setRoom(room);
    setName(name);
    socket = io(port);

    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search, port]);

  useEffect(() => {
    socket.on("message", (res) => {
      setMessages((messages) => [...messages, res]);
      console.log(messages);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const send = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendmsg", message, () => setMessage(""));
    }
  };

  return (
    <div className="Chatdiv">
      <div className="Innerdiv">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} send={send} />
      </div>
    </div>
  );
};

export default Chat;

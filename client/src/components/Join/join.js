import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./join.css";

const Join = () => {
  const [name, setName] = useState();
  const [room, setRoom] = useState();

  return (
    <div className="Joindiv">
      <div className="Input_div">
        <h4>Join Room</h4>
        <input
          placeholder="name"
          id="container"
          size="small"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          id="container"
          placeholder="room"
          onChange={(event) => setRoom(event.target.value)}
        />
        <Button
          style={{
            maxWidth: "50px",
            maxHeight: "30px",
            minWidth: "50px",
            minHeight: "30px",
            fontSize: "smaller",
          }}
          variant="contained"
          id="button"
          component={Link}
          to={`/chat/?name=${name}&room=${room}`}
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        >
          JOIN
        </Button>
      </div>
    </div>
  );
};

export default Join;

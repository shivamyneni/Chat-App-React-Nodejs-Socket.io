import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import "./Infobar.css";
const InfoBar = ({ room }) => {
  return (
    <div className="Infodiv">
      <OfflineBoltIcon
        style={{ minHeight: "20px", maxHeight: "20px", color: "#ffffff" }}
        id="online"
      />
      <p id="room">{room}</p>
      <div className="close">
        <a href="/">
          <CloseIcon
            style={{ minHeight: "20px", maxHeight: "20px", color: "#ffffff" }}
          />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;

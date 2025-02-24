import React from "react";
import "./InfoDisplay.modules.css";

import IDCard from "../ImportComponents/IDCard";

export default function GameInfoDisplay(props) {
  return (
    <div className="GameCard" style={{ margin: "5%" }}>
      <IDCard
        name={props.name}
        desc={props.desc}
        myimg={props.img}
        link={props.link}
      />
    </div>
  );
}

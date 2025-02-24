import React from "react";
import "./Services.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGamepad,
  faCompassDrafting,
} from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  const nameArray = ["Game Developer", "Web Developer"];
  return (
    <div className="services">
      <div className="Item">
        <FontAwesomeIcon bounce icon={faGamepad} className="FontStyle" />
        <h2>{nameArray[0]}</h2>
      </div>
      <div className="Item">
        <FontAwesomeIcon
          bounce
          icon={faCompassDrafting}
          className="FontStyle"
        />
        <h2>{nameArray[1]}</h2>
      </div>
    </div>
  );
};

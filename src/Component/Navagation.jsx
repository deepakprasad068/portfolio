import React from "react";
import "./Navagation.css";
import Tooltip from "@mui/material/Tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBriefcase,
  faUserGraduate,
  faLaptopFile,
  faAddressBook,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Navagation() {
  return (
    <div className="NavagationTab">
      <h3>Navigation</h3>
      <Tooltip title="Home" placement="left" arrow>
        <a href="#Home">
          <div className="NavagationItem">
            {/* Home */}
            <FontAwesomeIcon icon={faHouse} className="NavagationIcon" />
          </div>
        </a>
      </Tooltip>
      <Tooltip title="Profession" placement="left" arrow>
        <a href="#Services">
          <div className="NavagationItem">
            {/* Service */}
            <FontAwesomeIcon icon={faBriefcase} className="NavagationIcon" />
          </div>
        </a>
      </Tooltip>

      <Tooltip title="Project Work" placement="left" arrow>
        <a href="#ProjectWork">
          <div className="NavagationItem">
            {/* Project Work */}
            <FontAwesomeIcon icon={faLaptopFile} className="NavagationIcon" />
          </div>
        </a>
      </Tooltip>
      <Tooltip title="Portfolio" placement="left" arrow>
        <a href="#Portfolio">
          <div className="NavagationItem">
            {/* Portfolio */}
            <FontAwesomeIcon icon={faAddressBook} className="NavagationIcon" />
          </div>
        </a>
      </Tooltip>
      <Tooltip title="Education" placement="left" arrow>
        <a href="#Education">
          <div className="NavagationItem">
            {/* Education */}
            <FontAwesomeIcon icon={faUserGraduate} className="NavagationIcon" />
          </div>
        </a>
      </Tooltip>
      <Tooltip title="Contact" placement="left" arrow>
        <a href="#Contact">
          <div className="NavagationItem">
            {/* Contact */}
            <FontAwesomeIcon
              icon={faEnvelopeCircleCheck}
              className="NavagationIcon"
            />
          </div>
        </a>
      </Tooltip>
    </div>
  );
}

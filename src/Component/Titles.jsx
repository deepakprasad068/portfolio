import { red, yellow } from "@mui/material/colors";
import React from "react";
import myimage from "../assets/new img-Photoroom.png";

import "./Titles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function Titles() {
  return (
    <div className="BackGroundIMG">
      <span
        style={{
          marginTop: "8%",
          // important for width condition
          width: window.innerWidth > 1000 ? "95%" : "100%",
        }}>
        <div style={{ textAlign: "left", marginLeft: "10%" }}>
          <h1 style={{ color: "rgb(47, 47, 47)", margin: "0px" }}>
            I'm Deepak Prasad
          </h1>
          <h1 style={{ margin: "0px", color: "rgb(47, 47, 47)" }}>
            <span style={{ color: "rgb(255, 180, 0)" }}>Game </span>
            Developer
          </h1>
          <h3 className="TitleDesc" style={{ width: "100!important" }}>
            I’m a game and website developer skilled in Unity, React, and
            JavaScript. I create engaging games and responsive websites,
            focusing on performance, user experience, and innovative design
            across platforms. Always evolving to deliver high-quality,
            interactive digital experiences.
          </h3>

          <a href="#Contact">
            <button className="HireMe">
              Contact
              <FontAwesomeIcon icon={faBell} style={{ marginLeft: "10px" }} />
            </button>
          </a>
        </div>
      </span>
      {window.innerWidth > 1000 ? (
        <span style={{ marginTop: "20px", width: "85%", alignSelf: "right" }}>
          <img
            style={{ width: "68%", height: "auto", objectFit: "cover" }}
            src={myimage}
          />
        </span>
      ) : null}
    </div>
  );
}

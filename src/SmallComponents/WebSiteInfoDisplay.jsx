import React from "react";
import "./webSiteInfoDisplay.css";
import { Capsule } from "./Capsule";

export function WebSiteInfoDisplay(props) {
  return (
    <div className="webContain">
      <img className="WebSiteImage" src={props.img} alt="" />
      <h3 className="webSitename">{props.name}</h3>
      <p className="WebSitedesc">{props.desc}</p>
      <h4 style={{ margin: "0px 0px 5px 5%" }}>Technology</h4>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "1%" }}>
        {props.tech.map((tech, index) => {
          {
            return <Capsule name={tech} i={index} />;
          }
        })}
      </div>
    </div>
  );
}

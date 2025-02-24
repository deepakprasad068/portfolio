import React from "react";
import "./MainContain.css";

// ************************
import { Services } from "../SmallComponents/Services";
import { PricePlain } from "../SmallComponents/PricePlain";
import Education from "../SmallComponents/Education";
import ProjectWork from "../SmallComponents/ProjectWork";
import Portfolio from "../SmallComponents/Portfolio";
import { Contacts } from "../SmallComponents/Contacts";

export const MainContain = () => {
  return (
    <div>
      {/* Services Part */}
      <div id="Services">
        <div className="titles">
          <h1 className="h1center ">My Profession</h1>
        </div>
        <div className="mainContain">
          <Services />
        </div>
      </div>
      {/* ******************************************** */}
      {/* Price Plain */}
      {/* <div>
        <div className="titles">
          <h1>Price Plain</h1>
        </div>
        <div className="PricePlain">
          <PricePlain />
        </div>
      </div> */}
      {/* ***************************************** */}

      {/* Project work */}
      <div id="ProjectWork">
        <div className="titles">
          <h1 className="h1center ">Project Work</h1>
        </div>
        <div className="ProjectWork">
          <ProjectWork />
        </div>
      </div>
      {/* Portfolio */}
      <div id="Portfolio">
        <div className="titles">
          <h1 className="h1center ">Portfolio</h1>
        </div>
        <div className="Portfolio">
          <Portfolio type={"Game"} />
        </div>
        <div className="Portfolio">
          <Portfolio type={"Web Site"} />
        </div>
      </div>
      {/* Education */}
      <div id="Education">
        <div className="titles">
          <h1 className="h1center ">Eduction</h1>
        </div>
        <div className="Education">
          <Education />
        </div>
      </div>
      {/* Contact */}
      <div id="Contact" className="ContactsTitles">
        {window.innerWidth > 1000 ? (
          <>
            {" "}
            <span>Leave us your Info </span>
            <span>Contact Information</span>
          </>
        ) : (
          <span>Leave us your Info </span>
        )}
      </div>
      <div className="ContactsMain">
        <Contacts />
      </div>
    </div>
  );
};

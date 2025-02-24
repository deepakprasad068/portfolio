import React from "react";
import "./Contacts.modules.css";
import { ContactUs } from "../ImportComponents/ContactForm";

export const Contacts = () => {
  return (
    <div
      className="ContactBody"
      style={{
        flexDirection: window.innerWidth < 1000 ? "column" : "row",
        justifyContent: window.innerWidth < 1000 ? "center" : "space-around",
      }}>
      <div
        className="Email"
        style={{
          marginLeft: window.innerWidth < 1000 ? "20%" : "0",
          width: window.innerWidth < 1000 ? "60%" : "50%",
        }}>
        <ContactUs />
      </div>
      {window.innerWidth < 1000 ? (
        <h1 style={{ marginLeft: "25%" }}>Contact Information</h1>
      ) : null}

      <div
        className="ContactInfo"
        style={{
          marginLeft: window.innerWidth < 1000 ? "25%" : "0",
          width: window.innerWidth < 1000 ? "65%" : "",
        }}>
        <div className="ContactInfoTitle">
          <span className="atom">
            <span>Country</span>
            <span style={{ fontSize: "85%", color: "gray" }}>India</span>
          </span>
          <span className="atom">
            <span>State</span>
            <span style={{ fontSize: "85%", color: "gray" }}>West Bengal</span>
          </span>
          <span className="atom">
            <span>City</span>
            <span style={{ fontSize: "85%", color: "gray" }}>Siliguri</span>
          </span>
        </div>
        <div>
          <div className="ContactInfoTitle">
            <span className="atom">
              <span>Email:</span>
              <span style={{ fontSize: "85%", color: "gray" }}>
                Deepakprasad068@gmail.com
              </span>
            </span>
            <span className="atom">
              <span>Discord.</span>
              <span style={{ fontSize: "85%", color: "gray" }}>
                deepakprasad_37702
              </span>
            </span>
            <span className="atom">
              <span>Telegram.</span>
              <span style={{ fontSize: "85%", color: "gray" }}>
                deepakprasad
              </span>
            </span>
          </div>
        </div>
        <div>
          <div className="ContactInfoTitle">
            <span className="atom">
              <span>Phone No:</span>
              <span style={{ fontSize: "85%", color: "gray" }}>9064227916</span>
            </span>
            <span className="atom">
              <span>Phone no:</span>
              <span style={{ fontSize: "85%", color: "gray" }}>
                92310002808
              </span>
            </span>
            <span className="atom">
              <span>WhatUp:</span>
              <span style={{ fontSize: "85%", color: "gray" }}>9064227916</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./PricePlain.css";

export const PricePlain = () => {
  return (
    <>
      <span className="price">
        <div>
          <h2>Silver</h2>
          <h3>
            ₹300/<sub style={{ fontSize: "15px", color: "gray" }}>hour</sub>
          </h3>
          <h4>Service Provided to Customer</h4>
        </div>
      </span>
      <span className="price">500</span>
      <span className="price">800</span>
    </>
  );
};

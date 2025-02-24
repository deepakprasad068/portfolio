import { colors } from "@mui/material";
import React from "react";

export const Capsule = ({ name, i }) => {
  return (
    <span
      style={{
        backgroundColor: "rgb(241, 240, 246)",
        margin: "2%",
        color: "gray",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "80%",
        padding: "2%",
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 5px",
      }}
      key={i}>
      {name}
    </span>
  );
};

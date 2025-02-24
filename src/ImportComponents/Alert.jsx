import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function SimpleAlert({ message }) {
  return (
    <Alert
      icon={<CheckIcon fontSize="inherit" />}
      severity="success"
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zindex: "9999",
      }}>
      {message}
    </Alert>
  );
}

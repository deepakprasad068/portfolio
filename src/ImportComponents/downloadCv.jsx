import React from "react";
import { Link } from "react-router-dom";

function CVDownloadButton() {
  const handleDownload = (event) => {
    event.preventDefault(); // Prevent navigation
    const link = document.createElement("a");
    link.href = "/path/to/your/cv.pdf"; // Replace with the path to your CV file
    link.download = "Your_CV.pdf"; // The name of the downloaded file
    link.click(); // Trigger download
  };

  return (
    <div>
      <Link to="#" onClick={handleDownload}>
        <button>Download CV</button>
      </Link>
    </div>
  );
}

export default CVDownloadButton;

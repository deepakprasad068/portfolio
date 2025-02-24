import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { colors } from "@mui/material";
import { useState } from "react";

import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedinIn,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PDCard.css";
import myimage from "../assets/new img-Photoroom.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CVDownloadButton from "./downloadCv";
import SimpleAlert from "./Alert";

export default function MediaCard() {
  const [openalert, setopenalert] = useState(false);

  return (
    <dev className="PDCardTitle ">
      {/* photo  */}

      <span className="PDCardPhoto">
        <img className="PDImage" src={myimage} alt="" />
      </span>

      <CardContent>
        <h2 style={{ margin: "2%", color: "rgb(36, 37, 39)" }}>
          Deepak Prasad
        </h2>
        <h4 style={{ margin: "2%", color: "rgb(118, 118, 118)" }}>
          Game Developer
        </h4>
      </CardContent>

      {/* all social Media information in this section */}
      <div className="PDSocial">
        <a
          target="_Blank"
          href="https://www.facebook.com/profile.php?id=100045704929730">
          <div className="PDSocialIcon ">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </a>
        <a
          target="_Blank"
          href="https://www.instagram.com/username_ma_keya_rakha_ha/?hl=en">
          <div className="PDSocialIcon ">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </a>
        <a target="_Blank" href="https://github.com/deepakprasad068">
          <div className="PDSocialIcon ">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
        <a
          target="_Blank"
          href="https://www.linkedin.com/in/deepak-prasad-engineer/">
          <div className="PDSocialIcon ">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </a>
        <a
          target="_Blank"
          href="https://play.unity.com/en/user/74fa4e68-924c-46b1-9e54-eba0d3614296">
          <div className="PDSocialIcon ">
            <FontAwesomeIcon icon={faUnity} />
          </div>
        </a>
      </div>

      <hr className="PDHrStyle" />
      {/* details */}
      <ul className="PDList">
        <li className="PDListItems">
          <span className="liAtom">Age :</span>
          <span>24</span>
        </li>
        <li className="PDListItems">
          <span className="liAtom">Freelance :</span>
          <span style={{ color: "rgb(126, 185, 67)" }}>Available</span>
        </li>
        <li className="PDListItems">
          <span className="liAtom">Adress :</span>
          <span>Siliguri, W.B</span>
        </li>
      </ul>
      <hr className="PDHrStyle" />
      {/* Language  */}
      <h2 style={{ color: "gray" }}>Languages</h2>
      <ul className="PDList">
        <li className="PDListItems">
          <span className="liAtom">English </span>
          <span>90%</span>
        </li>
        <li className="PDListItems">
          <span className="liAtom">Hindi </span>
          <span>100%</span>
        </li>
        <li className="PDListItems">
          <span className="liAtom">Bengali </span>
          <span>60%</span>
        </li>
      </ul>
      <hr className="PDHrStyle" />
      {/* Skills */}
      <h2 style={{ color: "gray" }}>Skills</h2>
      <ul className=" Skills">
        <li>* Unity</li>
        <li>* React</li>
        <li>* Node</li>
        <li>* Functional Programming</li>
        <li>* Problem Solving</li>
      </ul>
      <hr className="PDHrStyle" />
      {/* Extra Skills */}
      <h2>Extra Skills</h2>
      <ul className="Skills">
        <li>* Bootstrap,Material Ui</li>
        <li>* Git Knowledge</li>
        <li>* Blender</li>
      </ul>
      <hr className="PDHrStyle" />
      {/* Cv Download */}
      {openalert ? <SimpleAlert message="Download Started.." /> : <></>}

      <a
        onClick={downloaded}
        className="downloadButton"
        href="/src/assets/DeepakPrasadResume.png"
        download="DeepakPrasadResume.png">
        Download Resume
      </a>
    </dev>
  );

  function downloaded() {
    setopenalert(true);
    setTimeout(() => {
      setopenalert(false);
    }, 6000);
  }
}

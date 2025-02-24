import React from "react";
import "./Portfolio.css";
// Image Imports
import myimgGalactic from "../assets/Screenshot 2024-12-22 212434.png";
import myimgboxBoom from "../assets/BoxBoom.png";
import myimgKillthebot from "../assets/kill the bot.png";
import myimgRoyalRun from "../assets/royalrun.png";
import myimgTheHunt from "../assets/the Hunt.png";
import myimgTravello from "../assets/Travello.png";
import myimgmanga from "../assets/manga.png";
import myimgportfolio from "../assets/Portfolio.png";
// ************************
import InfoDisplay from "./GameInfoDisplay";
import { WebSiteInfoDisplay } from "./WebSiteInfoDisplay";
export default function Portfolio({ type }) {
  if (type == "Game") {
    return (
      <div>
        <div className="Header">
          <span>{type} </span>
        </div>
        <div className="Container">
          <div className="Infos">
            <InfoDisplay
              name="The Hunt"
              desc="shooting Game"
              img={myimgTheHunt}
              link="null"
            />
          </div>

          <div className="Infos">
            <InfoDisplay
              name="Kill the Bot"
              desc="Adventure Game"
              img={myimgKillthebot}
              link="https://play.unity.com/en/games/b825c93a-3c7b-4794-b5d0-f94b85c787dd/kill-the-bot"
            />
          </div>
          <div className="Infos">
            <InfoDisplay
              name="Royal Run"
              desc="Endless Running Game"
              img={myimgRoyalRun}
              link="https://play.unity.com/en/games/d28655a0-914f-4e73-99c1-4bccad7f6117/royal-run"
            />
          </div>
          <div className="Infos">
            <InfoDisplay
              name="Box Boom"
              desc="	Arcade Game"
              img={myimgboxBoom}
              link="https://play.unity.com/en/games/78025176-69d3-48d8-a5f6-595e46f87e0a/box-boom"
            />
          </div>
          <div className="Infos">
            <InfoDisplay
              name="Galactic Fighters"
              desc="shooting Game"
              img={myimgGalactic}
              link="https://play.unity.com/en/games/44945cf3-0db3-49a0-be2e-5894ab1af223/galactic-fighters"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="Header">
          <span>{type} </span>
        </div>
        <div className="Container">
          <div
            className="Infos"
            style={{
              margin: window.innerWidth < 1000 ? "3%" : "0%",
              width: window.innerWidth < 1000 ? "100%" : "25%",
            }}>
            <WebSiteInfoDisplay
              name="Travello"
              desc={"Flight Booking , Web Site"}
              img={myimgTravello}
              tech={["Ejs", "Node", "Mongodb", "Express", "router"]}
            />
          </div>
          <div
            className="Infos"
            style={{
              margin: window.innerWidth < 1000 ? "3%" : "0%",
              width: window.innerWidth < 1000 ? "100%" : "25%",
            }}>
            <WebSiteInfoDisplay
              name="Mangwa Scean"
              desc={"Manga Hosting, Web Site"}
              img={myimgmanga}
              tech={["React", "Node", "Mongodb", "Express"]}
            />
          </div>
          <div
            className="Infos"
            style={{
              margin: window.innerWidth < 1000 ? "3%" : "0%",
              width: window.innerWidth < 1000 ? "100%" : "25%",
            }}>
            <WebSiteInfoDisplay
              name="Portfolio"
              desc={"Portfolio,Web site"}
              img={myimgportfolio}
              tech={["React"]}
            />
          </div>
        </div>
      </div>
    );
  }
}

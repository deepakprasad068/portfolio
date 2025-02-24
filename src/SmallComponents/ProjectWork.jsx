import React from "react";
import "./ProjectWork.css";

export default function ProjectWork() {
  return (
    <div>
      <div className="title">
        <div className="Info">
          <span>
            <p style={{ fontWeight: "bolder", width: "150px" }}>
              The Hunt
              <h5 style={{ margin: "5% 0%" }}>10/12/24-20/01/25</h5>
            </p>
          </span>
          <span>
            <p style={{ textAlign: "justify" }}>
              The Hunt" is a first-person shooter game developed in Unity where
              players must destroy robots spawned from a magical door and
              automatic fire-machines. The game features various weapons with
              unique abilities, such as ranged, explosive, and energy-based
              weapons. Players must fight off waves of enemies, using different
              tactics and weapons to survive. The levels become progressively
              harder, and the magical door continuously spawns new robots. The
              player must defeat all enemies to clear level while avoiding
              attacks from automatic fire-machines.
            </p>
          </span>
        </div>
        <hr
          style={{
            border: "2px Solid rgb(241, 240, 246)",
            width: "90%",
            borderRadius: "50%",
          }}
        />
        <div className="Info">
          <span className="GapBetween">
            <p style={{ fontWeight: "bolder", width: "150px" }}>
              Royal Run
              <h5 style={{ margin: "5% 0%" }}>25/11/24-2/01/25</h5>
            </p>
          </span>
          <span className="gapBetween">
            <p style={{ textAlign: "justify" }}>
              {" "}
              Royal Run is an exciting endless running game developed using
              Unity, where players control a character sprinting through various
              environments, avoiding obstacles, and collecting power-ups. The
              goal is to survive as long as possible while navigating through
              increasingly difficult levels. The game features vibrant graphics,
              smooth controls, and an engaging experience as players try to set
              high scores and complete challenges. With its dynamic environments
              and intuitive gameplay,
            </p>
          </span>
        </div>
        <hr
          style={{
            border: "2px Solid rgb(241, 240, 246)",
            width: "90%",
            borderRadius: "50%",
          }}
        />
        <div className="Info">
          <span className="GapBetween">
            <p style={{ fontWeight: "bolder", width: "150px" }}>
              Tic Tac Toe(Multiplayer)
              <h5 style={{ margin: "5% 0%" }}>15/10/24-5/12/24</h5>
            </p>
          </span>
          <span className="gapBetween">
            <p style={{ textAlign: "justify" }}>
              Tic Tac Toe (Multiplayer) is a classic game built with Unity,
              designed for local multiplayer. Players can engage in a two-player
              game where one uses 'X' and the other uses 'O' to take turns and
              try to align three of their symbols in a row—horizontally,
              vertically, or diagonally. The game features a simple and
              intuitive interface, making it easy for players to jump in and
              start playing immediately. It includes basic multiplayer
              functionality, where two players can share the same device, making
              it perfect for quick, competitive gameplay with friends or family.
            </p>
          </span>
        </div>
        <hr
          style={{
            border: "2px Solid rgb(241, 240, 246)",
            width: "90%",
            borderRadius: "50%",
          }}
        />
        <div className="Info">
          <span className="GapBetween">
            <p style={{ fontWeight: "bolder", width: "150px" }}>
              Travello
              <h5 style={{ margin: "5% 0%" }}>25/01/24-5/06/24</h5>
            </p>
          </span>
          <span className="gapBetween">
            <p style={{ textAlign: "justify" }}>
              Travello is a travel website that allows users to search and book
              flights, explore destinations, and find nearby attractions on an
              interactive map. Users can filter flight options by price,
              duration, and other preferences, and book hotels or activities at
              their destination. The site features secure payment processing and
              provides booking confirmations, reviews, and personalized user
              profiles for easy trip management. The integrated map helps users
              discover places of interest, plan routes, and make informed travel
              decisions.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./IDCard.css";

export default function IDCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.myimg}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            className="GameName"
            component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.desc}
          </Typography>

          {props.link != "null" ? (
            <a className="PlayButton" target="_blank" href={props.link}>
              Play
            </a>
          ) : (
            <>
              <p className="lockGame ">You Can't Play</p>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

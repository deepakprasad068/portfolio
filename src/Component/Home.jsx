import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Home.css";

// *****************************************
import { useState, useEffect } from "react";
import PersonalDetails from "./PersonalDetails";
import Titles from "./Titles";
import Navagation from "./Navagation";
import { MainContain } from "./MainContain";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function FullWidthGrid() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} className="HomePersonalDetails">
          <Item>
            {/*component for  personal details  */}
            <PersonalDetails />
          </Item>
        </Grid>
        <Grid item xs={12} md={8} className="HomeMainContain">
          <>
            <Item id="Home">
              {/* component about Titles  */}
              <Titles />
            </Item>
            <div>
              <MainContain />
            </div>
          </>
        </Grid>
        <Grid item xs={6} md={1} className="HomeIndex">
          {window.innerWidth > 1000 ? (
            <Item>
              {/* component for navageation */}

              <Navagation />
            </Item>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
}

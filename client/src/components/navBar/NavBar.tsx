import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import logo from "../../assets/bike.png";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="bike" height="70px" width="70px" />
      <Link to="/">
        <Typography>Home</Typography>
      </Link>
      <Link to="/journeys">
        <Typography>Journeys</Typography>
      </Link>
      <Link to="/stations">
        <Typography>Stations</Typography>
      </Link>
    </div>
  );
}

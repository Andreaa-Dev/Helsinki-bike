import React from "react";
import { Link } from "@mui/material";

import logo from "../../assets/bike.png";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="bike" height="50px" width="50px" />
      <Link href="/" underline="none">
        Home
      </Link>
      <Link href="/journeys" underline="none">
        Journeys
      </Link>
      <Link href="/stations" underline="none">
        Stations
      </Link>
    </div>
  );
}

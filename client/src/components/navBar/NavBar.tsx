import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/bike.png";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="bike" height="50px" width="50px" />
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/journeys" className="link">
        Journeys
      </Link>
      <Link to="/stations" className="link">
        Stations
      </Link>
    </div>
  );
}

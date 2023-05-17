import React from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box className="home">
      <h1>Helsinki city bike</h1>

      <Link to="/journeys">
        <Button variant="outlined"> Check out the journeys here</Button>
      </Link>
    </Box>
  );
}

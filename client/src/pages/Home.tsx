import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box className="home">
      <Typography>Helsinki city bike</Typography>
      <Link to="/journeys">
        <Button variant="outlined"> Check out the journeys here</Button>
      </Link>
    </Box>
  );
}

import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box className="home">
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        Helsinki city bike
      </Typography>
      <Link to="/journeys">
        <Button variant="outlined"> Check out the journeys here</Button>
      </Link>
    </Box>
  );
}

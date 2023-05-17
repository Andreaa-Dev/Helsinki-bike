import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";

import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import JourneysList from "./pages/JourneysList";
import StationsList from "./pages/StationsList";
import SingleStation from "./components/stations/singleStation/SingleStation";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journeys" element={<JourneysList />} />
        <Route path="/stations" element={<StationsList />} />
        <Route path="/stations/:id" element={<SingleStation />} />
      </Routes>
    </div>
  );
}

export default App;

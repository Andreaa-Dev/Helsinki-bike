import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";

import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import JourneysList from "./pages/JourneysList";
import StationsList from "./pages/StationsList";
import SingleStation from "./pages/SingleStation";
import StationMap from "./components/stations/stationMap/StationMap";
import SingleJourney from "./pages/SingleJourney";
import JourneyFormPage from "./pages/JourneyFormPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/journeys" element={<JourneysList />} />
        <Route path="/journeys/:id" element={<SingleJourney />} />

        <Route path="/stations" element={<StationsList />} />
        <Route path="/stations/:id" element={<SingleStation />} />

        <Route path="/map" element={<StationMap />} />

        <Route path="/form" element={<JourneyFormPage />} />
      </Routes>
    </div>
  );
}

export default App;

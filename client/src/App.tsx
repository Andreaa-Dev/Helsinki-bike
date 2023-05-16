import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";

import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import JourneysList from "./pages/JourneysList";
import Stations from "./pages/Stations";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journeys" element={<JourneysList />} />
        <Route path="/stations" element={<Stations />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN as string,
});

const helsinkiCoordinates: [number, number] = [24.945831, 60.192059];

export default function StationMap() {
  return (
    <div>
      <h1>Station </h1>
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "70vh",
          width: "100vw",
        }}
        center={helsinkiCoordinates}
      ></Map>
    </div>
  );
}

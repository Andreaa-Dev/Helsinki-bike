import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchStationData } from "../../redux/thunk/stations";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN as string,
});

const helsinkiCoordinates: [number, number] = [24.945831, 60.192059];

export default function StationMap() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dispatch = useDispatch<AppDispatch>();
  const stations = useSelector((state: RootState) => state.stations.stations);

  useEffect(() => {
    dispatch(fetchStationData(page, rowsPerPage));
  }, [dispatch, page, rowsPerPage]);

  const result = stations.slice(0, 10);
  console.log(result);

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
      >
        {result.map((item) => (
          <Marker coordinates={[item.x, item.y]} key={item.id}>
            <LocationOnIcon />
          </Marker>
        ))}
      </Map>
    </div>
  );
}

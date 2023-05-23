import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import mapboxgl from "mapbox-gl";

import { RootState, AppDispatch } from "../../../redux/store";
import { fetchStationData } from "../../../redux/thunk/stations";

export default function StationMap() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dispatch = useDispatch<AppDispatch>();

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);

  const stations = useSelector((state: RootState) => state.stations.stations);
  stations.forEach((s) => {
    new mapboxgl.Marker().setLngLat([s.x, s.y]).addTo(map.current);
  });

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [24.945831, 60.192059],
      zoom: 9,
    });
    // sources
    map.current.on("load", () => {
      map.current.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [-77.038659, 38.931567],
              },
            },
          ],
        },
      });
    });

    // layer
    map.current.addLayer({
      id: "places",
      type: "circle",
      source: "places",
      paint: {
        "circle-color": "#4264fb",
        "circle-radius": 6,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#ffffff",
      },
    });

    // pop-up
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.current.on("mouseenter", "places", (e: any) => {
      map.current.getCanvas().style.cursor = "pointer";
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
    });

    map.current.on("mouseleave", "places", () => {
      map.current.getCanvas().style.cursor = "";
      popup.remove();
    });
  }, []);

  useEffect(() => {
    dispatch(fetchStationData(page, rowsPerPage));
  }, [dispatch, page, rowsPerPage]);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

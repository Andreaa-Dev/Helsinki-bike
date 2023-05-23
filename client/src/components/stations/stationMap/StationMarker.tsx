import React from "react";
import { Marker } from "react-mapbox-gl";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { Station } from "../../../types/type";

type Prop = {
  item: Station;
};

export default function StationMarker({ item }: Prop) {
  console.log(item.x);
  return (
    <Marker coordinates={[item.x, item.y]} anchor="bottom">
      <LocationOnIcon />
    </Marker>
  );
}

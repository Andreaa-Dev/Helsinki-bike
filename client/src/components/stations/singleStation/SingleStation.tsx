import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import Loading from "../../loading/Loading";

export default function SingleStation() {
  const singleStation = useSelector(
    (state: RootState) => state.singleStation.singleStation
  );

  const isLoading = useSelector(
    (state: RootState) => state.singleStation.loading
  );
  if (isLoading) {
    return <Loading />;
  }
  if (!singleStation) {
    return <p> Error ...</p>;
  }
  return (
    <div>
      SingleStation
      <p> Station name: {singleStation.name}</p>
      <p> Address: {singleStation.address}</p>
      <p> City: {singleStation.kaupunki}</p>
    </div>
  );
}

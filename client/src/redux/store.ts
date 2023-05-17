import { configureStore } from "@reduxjs/toolkit";

import journeysReducer from "./slices/journeys";
import stationsReducer from "./slices/stations";
import singleStationReducer from "./slices/singleStation";

const store = configureStore({
  reducer: {
    journeys: journeysReducer,
    stations: stationsReducer,
    singleStation: singleStationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

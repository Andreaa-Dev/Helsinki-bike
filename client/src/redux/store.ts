import { configureStore } from "@reduxjs/toolkit";

import journeysReducer from "./slices/journeys";
import stationsReducer from "./slices/stations";

const store = configureStore({
  reducer: {
    journeys: journeysReducer,
    stations: stationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import journeysReducer from "./slices/journeys";

const store = configureStore({
  reducer: {
    journeys: journeysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

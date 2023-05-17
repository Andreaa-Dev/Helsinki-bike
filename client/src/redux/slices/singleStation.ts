import { createSlice } from "@reduxjs/toolkit";

import { Station } from "../../types/type";

type InitialState = {
  loading: boolean;
  error: string;
  singleStation: Station | null;
  startingJourneyNumber: number;
};

const initialState: InitialState = {
  loading: true,
  error: "",
  singleStation: null,
  startingJourneyNumber: 0,
};

const singleStationSlice = createSlice({
  name: "singleStation",
  initialState,
  reducers: {
    getSingleStationData: (state, action) => {
      state.singleStation = action.payload;
      state.loading = false;
    },
    getStartingJourneyNum: (state, action) => {
      state.startingJourneyNumber = action.payload;
    },
  },
});

export const singleStationActions = singleStationSlice.actions;
const singleStationReducer = singleStationSlice.reducer;
export default singleStationReducer;

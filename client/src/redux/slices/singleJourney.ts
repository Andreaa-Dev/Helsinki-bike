import { createSlice } from "@reduxjs/toolkit";

import { Journey } from "../../types/type";

type InitialState = {
  loading: boolean;
  error: string;
  singleJourney: Journey | null;
};

const initialState: InitialState = {
  loading: true,
  error: "",
  singleJourney: null,
};

const singleJourneySlice = createSlice({
  name: "singleJourney",
  initialState,
  reducers: {
    getSingleJourneyData: (state, action) => {
      state.singleJourney = action.payload;
      state.loading = false;
    },
  },
});

export const singleJourneyActions = singleJourneySlice.actions;
const singleJourneyReducer = singleJourneySlice.reducer;
export default singleJourneyReducer;

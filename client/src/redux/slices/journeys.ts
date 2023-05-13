import { createSlice } from "@reduxjs/toolkit";
import { Journey } from "../../types/type";

type InitialState = { loading: boolean; journeys: Journey[]; error: string };

const initialState: InitialState = {
  loading: true,
  journeys: [],
  error: "",
};

const journeysSlice = createSlice({
  name: "journeys",
  initialState,
  reducers: {
    getJourneyData: (state, action) => {
      state.journeys = action.payload;
    },
    toggleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const journeysActions = journeysSlice.actions;
const journeysReducer = journeysSlice.reducer;
export default journeysReducer;

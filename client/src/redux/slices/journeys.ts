import { searchJourneys } from "./../../../../api/src/controllers/journeys";
import { createSlice } from "@reduxjs/toolkit";
import { Journey } from "../../types/type";

type InitialState = {
  loading: boolean;
  error: string;
  totalRows: number;
  journeys: Journey[];
};

const initialState: InitialState = {
  loading: true,
  error: "",
  totalRows: 0,
  journeys: [],
};

const journeysSlice = createSlice({
  name: "journeys",
  initialState,
  reducers: {
    getJourneyData: (state, action) => {
      state.journeys = action.payload.journeys;
      state.totalRows = action.payload.totalPages;
    },
    toggleLoading: (state, action) => {
      state.loading = action.payload;
    },
    searchJourneys: (state, action) => {
      state.journeys = action.payload;
    },
  },
});

export const journeysActions = journeysSlice.actions;
const journeysReducer = journeysSlice.reducer;
export default journeysReducer;

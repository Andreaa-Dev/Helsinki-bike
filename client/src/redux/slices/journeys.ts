import { searchJourneys } from "./../../../../api/src/controllers/journeys";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Journey } from "../../types/type";

type SortPayLoad = {
  sortDirection: string | boolean;
  field: keyof Journey;
};

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
    sortJourney: (state, action: PayloadAction<SortPayLoad>) => {
      const { sortDirection, field } = action.payload;

      if (sortDirection === "desc") {
        state.journeys.sort((a, b) => {
          if (a[field] < b[field]) {
            return -1;
          }
          if (a[field] > b[field]) {
            return 1;
          }
          return 0;
        });
        return;
      }
      state.journeys.sort((a, b) => {
        if (a[field] > b[field]) {
          return -1;
        }
        if (a[field] < b[field]) {
          return 1;
        }
        return 0;
      });
    },
  },
});

export const journeysActions = journeysSlice.actions;
const journeysReducer = journeysSlice.reducer;
export default journeysReducer;

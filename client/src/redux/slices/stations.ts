import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Station } from "../../types/type";

type InitialState = {
  loading: boolean;
  error: string;
  totalRows: number;
  stations: Station[];
};

const initialState: InitialState = {
  loading: true,
  error: "",
  totalRows: 0,
  stations: [],
};

const stationsSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    getStationData: (state, action) => {
      state.stations = action.payload.stations;
      state.totalRows = action.payload.totalPages;
    },
    toggleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const stationsActions = stationsSlice.actions;
const stationsReducer = stationsSlice.reducer;
export default stationsReducer;

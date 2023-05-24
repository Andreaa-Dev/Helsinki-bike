import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Station } from "../../types/type";

type SortPayLoad = {
  sortDirection: string | boolean;
  field: keyof Station;
};

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
      state.totalRows = action.payload.totalStations;
      state.loading = false;
    },
    sortStation: (state, action: PayloadAction<SortPayLoad>) => {
      const { sortDirection, field } = action.payload;

      if (sortDirection === "desc") {
        state.stations.sort((a, b) => {
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
      state.stations.sort((a, b) => {
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

export const stationsActions = stationsSlice.actions;
const stationsReducer = stationsSlice.reducer;
export default stationsReducer;

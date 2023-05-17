import { createSlice } from "@reduxjs/toolkit";

import { Station } from "../../types/type";

type InitialState = {
  loading: boolean;
  error: string;
  singleStation: Station | null;
};

const initialState: InitialState = {
  loading: true,
  error: "",
  singleStation: null,
};

const singleStationSlice = createSlice({
  name: "singleStation",
  initialState,
  reducers: {
    getSingleStationData: (state, action) => {
      state.singleStation = action.payload;
      state.loading = false;
    },
  },
});

export const singleStationActions = singleStationSlice.actions;
const singleStationReducer = singleStationSlice.reducer;
export default singleStationReducer;

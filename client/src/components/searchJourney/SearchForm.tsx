import React, { useState } from "react";
import { TextField } from "@mui/material";
import lodash from "lodash";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { journeysActions } from "../../redux/slices/journeys";
import { RootState } from "../../redux/store";

type Prop = {
  page: number;
  rowsPerPage: number;
};

export default function SearchForm({ page, rowsPerPage }: Prop) {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const journeys = useSelector((state: RootState) => state.journeys.journeys);

  const handleSearch = lodash.debounce((input: string) => {
    const url = `http://localhost:8000/journeys/search?search=${input}/page=${page}&limit=${rowsPerPage}`;
    axios.get(url).then((response) => {
      dispatch(journeysActions.searchJourneys(response.data));
    });
  }, 500);

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    setUserInput(input);
    handleSearch(input);
  }
  console.log(journeys, "serach");

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={onChangeHandler}
        value={userInput}
      />
    </div>
  );
}

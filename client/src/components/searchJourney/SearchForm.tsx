import React, { useState, useCallback, useEffect } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";

import { journeysActions } from "../../redux/slices/journeys";
import { backendUrl } from "../../redux/thunk/journeys";

type Prop = {
  page: number;
  rowsPerPage: number;
};

export default function SearchForm({ page, rowsPerPage }: Prop) {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const search = useCallback(
    (url: string) => {
      axios.get(url).then((response) => {
        dispatch(journeysActions.searchJourneys(response.data));
      });
    },
    [dispatch]
  );

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    setUserInput(input);
  }

  useEffect(() => {
    const url = `${backendUrl}/journeys/search?search=${userInput}&page=${page}&limit=${rowsPerPage}`;

    const id = setTimeout(() => search(url), 500);
    return () => {
      clearTimeout(id);
    };
  }, [userInput, page, rowsPerPage, search]);

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        onChange={onChangeHandler}
        value={userInput}
        helperText="Please enter the station name"
      />
    </div>
  );
}

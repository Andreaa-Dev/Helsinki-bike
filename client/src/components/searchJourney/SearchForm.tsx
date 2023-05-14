import React, { useState } from "react";
import { TextField } from "@mui/material";
import lodash from "lodash";

export default function SearchForm() {
  const [userInput, setUserInput] = useState("");

  const handleSearch = lodash.debounce((query: string) => {
    // send request to back end
  }, 500);

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    handleSearch(event.target.value);
  }

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={onChangeHandler}
      />
    </div>
  );
}

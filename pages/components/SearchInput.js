import React, { useState } from "react";
import { FormGroup, TextField, Button } from "@material-ui/core";
import { Form, Formik } from "formik";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const getInputSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Formik>
        <Form onSubmit={onFormSubmit}>
          <TextField
            fullWidth
            autoComplete="off"
            name="search"
            label="Search"
            value={searchTerm}
            onChange={getInputSearchTerm}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchInput;

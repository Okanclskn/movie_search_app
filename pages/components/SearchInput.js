import React, { useState } from "react";
import { FormGroup, TextField, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { Box } from "@material-ui/core";
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermList, setSearchTermList] = useState([]);
  const [showSearchHistory, setSearchhistory] = useState(false);
  const router = useRouter();
  console.log(searchTermList, "hiiii");
  const getInputSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setSearchhistory(false);
    if (searchTermList.length < 5) {
      setSearchTermList([...searchTermList, searchTerm]);
    } else {
      const tempArr = searchTermList;
      tempArr.pop();
      tempArr.unshift(searchTerm);
      setSearchTermList(tempArr);
    }
    router.push({
      pathname: "/Home",
      query: { term: searchTerm },
    });
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
            onFocus={() => setSearchhistory(true)}
          />
          {showSearchHistory && (
            <ul style={{ listStyleType: "none" }}>
              {searchTermList.map((term) => {
                return (
                  <Box>
                    <li onClick={() => setSearchTerm(term)}>{term}</li>
                  </Box>
                );
              })}
            </ul>
          )}
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchInput;

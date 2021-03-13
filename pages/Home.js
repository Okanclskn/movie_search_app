import React from "react";
import { Box } from "@material-ui/core";
import SearchInput from "./components/SearchInput";
export default function HomePage() {
  return (
    <React.Fragment>
      <Box margin="0 auto" width="30%">
        <SearchInput></SearchInput>
      </Box>
    </React.Fragment>
  );
}

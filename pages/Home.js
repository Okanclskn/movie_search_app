import React from "react";
import { Box } from "@material-ui/core";
import SearchInput from "./components/SearchInput";
const API_KEY = "dc6f208a79ce2be6fb75d72a554bdd33";
import movies_api from "./api/movie_api";
import MovieList from "./components/MoviesList";

export default function HomePage({ movies }) {
  return (
    <React.Fragment>
      <Box margin="0 auto" width="30%">
        <SearchInput></SearchInput>
      </Box>
      <MovieList movieslist={movies}></MovieList>
    </React.Fragment>
  );
}

HomePage.getInitialProps = async (context) => {
  const term = context.query.term;
  const response = await movies_api.get("/search/movie", {
    params: {
      api_key: API_KEY,
      query: term,
      page: 1,
    },
  });

  return { movies: response.data.results };
};

import React, { useContext, useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import SearchInput from "./components/SearchInput";
const API_KEY = "dc6f208a79ce2be6fb75d72a554bdd33";
import movies_api from "./api/movie_api";
import MovieList from "./components/MoviesList";
import MovieContext from "./context/UpComingContext";

export default function HomePage({ movies, trUpComingMovies }) {
  const { upComingMovies, setUpComingMovies } = useContext(MovieContext);

  useEffect(() => {
    setUpComingMovies(trUpComingMovies);
  }, [upComingMovies]);
  return (
    <React.Fragment>
      <Box margin="0 auto" width="30%">
        <SearchInput></SearchInput>
      </Box>
      <Container maxWidth="md">
        <MovieList movieslist={movies}></MovieList>
      </Container>
    </React.Fragment>
  );
}

HomePage.getInitialProps = async (context) => {
  const term = context.query.term;
  const response = await movies_api.get("/search/movie", {
    params: {
      api_key: API_KEY,
      query: term ? term : "marvel",
      page: 1,
    },
  });

  return {
    movies: response.data.results,
  };
};

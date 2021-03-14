import React, { useContext, useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import SearchInput from "./components/SearchInput";
const API_KEY = "dc6f208a79ce2be6fb75d72a554bdd33";
import movies_api from "./api/movie_api";
import MovieList from "./components/MoviesList";
import MovieContext from "./context/UpComingContext";
import MovieCard from "./components/MovieCard";
import UpComingMoviesList from "./components/UpComingMoviesList";

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
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={3}>
          <UpComingMoviesList upcomingmovies={upComingMovies} />
        </Grid>
        <Grid item xs={9}>
          <Container maxWidth="md">
            <MovieList movieslist={movies}></MovieList>
          </Container>
        </Grid>
      </Grid>
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
  const upcomingresponse = await movies_api.get("/movie/upcoming", {
    params: {
      api_key: API_KEY,
      region: "TR",
      page: 1,
    },
  });

  return {
    movies: response.data.results,
    trUpComingMovies: upcomingresponse.data.results,
  };
};

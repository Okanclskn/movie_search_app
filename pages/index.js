import Head from "next/head";
import HomePage from "./Home";
import { Box, Container, Grid } from "@material-ui/core";
import movies_api from "./api/movie_api";
import UpComingMoviesList from "./components/UpComingMoviesList";
const API_KEY = "dc6f208a79ce2be6fb75d72a554bdd33";
export default function Home({ trUpComingMovies }) {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={3}>
          <UpComingMoviesList upcomingmovies={trUpComingMovies} />
        </Grid>
        <Grid item xs={9}>
          <HomePage trUpComingMovies={trUpComingMovies}></HomePage>
        </Grid>
      </Grid>
    </div>
  );
}
export async function getStaticProps() {
  const upcomingresponse = await movies_api.get("/movie/upcoming", {
    params: {
      api_key: API_KEY,
      region: "TR",
      page: 1,
    },
  });
  return {
    props: { trUpComingMovies: upcomingresponse.data.results },
  };
}

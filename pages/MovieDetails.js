import Grid from "@material-ui/core/Grid";
import movies_api from "./api/movie_api";
import { MovieDetailCard } from "./components/MovieDetailCard";
import SimilarMoviesList from "./components/SimilarMoviesList";
const API_KEY = "dc6f208a79ce2be6fb75d72a554bdd33";
export default function MovieDetails({ movieDetail, similarMoviesList }) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SimilarMoviesList similarmovieslist={similarMoviesList} />
        </Grid>
        <Grid item xs={9}>
          <MovieDetailCard moviedetail={movieDetail} />
        </Grid>
      </Grid>
    </div>
  );
}
MovieDetails.getInitialProps = async (context) => {
  const movieId = context.query.id;
  const response = await movies_api.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  const similarresponse = await movies_api.get(`/movie/${movieId}/similar`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(similarresponse, "similar");
  return {
    movieDetail: response.data,
    similarMoviesList: similarresponse.data.results,
  };
};

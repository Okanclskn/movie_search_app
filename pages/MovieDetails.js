import { Container } from "@material-ui/core";
import movies_api from "./api/movie_api";
import { MovieDetailCard } from "./components/MovieDetailCard";
const API_KEY = "dc6f208a79ce2be6fb75d72a554bdd33";
export default function MovieDetails({ movieDetail }) {
  return (
    <div>
      <Container maxWidth="md">
        <MovieDetailCard moviedetail={movieDetail} />
      </Container>
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

  return { movieDetail: response.data };
};

import { Container } from "@material-ui/core";
import MovieCard from "./MovieCard";
import { useRouter } from "next/router";
const MovieList = ({ movieslist }) => {
  const router = useRouter();
  const showMovieDetails = (id) => {
    router.push({
      pathname: "/MovieDetails",
      query: { id: id },
    });
  };
  return (
    <Container maxWidth="md">
      {movieslist?.map((movie, index) => (
        <div key={index} onClick={() => showMovieDetails(movie.id)}>
          <MovieCard movie={movie}></MovieCard>
        </div>
      ))}
    </Container>
  );
};
export default MovieList;

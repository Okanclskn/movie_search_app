import { Container } from "@material-ui/core";
import MovieCard from "./MovieCard";

const MovieList = ({ movieslist }) => {
  console.log(movieslist, "mooo");
  return (
    <Container maxWidth="md">
      {movieslist.map((movie, index) => (
        <div key={index}>
          <MovieCard movie={movie}></MovieCard>
        </div>
      ))}
    </Container>
  );
};
export default MovieList;

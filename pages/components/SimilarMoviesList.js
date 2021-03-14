import { Container } from "@material-ui/core";
import MovieCard from "./MovieCard";
import { useRouter } from "next/router";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const SimilarMoviesList = ({ similarmovieslist }) => {
  const router = useRouter();
  const showMovieDetails = (id) => {
    router.push({
      pathname: "/MovieDetails",
      query: { id: id },
    });
  };
  return (
    <Container maxWidth="xs">
      {similarmovieslist.slice(0, 10)?.map((movie, index) => (
        <div key={index} onClick={() => showMovieDetails(movie.id)}>
          <Typography gutterBottom variant="h5" component="h5">
            {"Similar Movies"}
          </Typography>
          <Box>
            <MovieCard movie={movie}></MovieCard>
          </Box>
        </div>
      ))}
    </Container>
  );
};

export default SimilarMoviesList;

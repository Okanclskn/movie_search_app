import React from "react";
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
    <React.Fragment>
      {movieslist?.map((movie, index) => (
        <div key={index} onClick={() => showMovieDetails(movie.id)}>
          <MovieCard movie={movie}></MovieCard>
        </div>
      ))}
    </React.Fragment>
  );
};
export default MovieList;

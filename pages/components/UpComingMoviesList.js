import React from "react";
import { Box } from "@material-ui/core";
import { useRouter } from "next/router";
import MovieCard from "../components/MovieCard";
const UpComingMoviesList = ({ upcomingmovies }) => {
  const router = useRouter();
  const showMovieDetails = (id) => {
    router.push({
      pathname: "/MovieDetails",
      query: { id: id },
    });
  };

  return (
    <div>
      <h2>Up Coming Movies to Turkey</h2>
      {upcomingmovies?.map((mv, index) => {
        return (
          <div key={index} onClick={() => showMovieDetails(mv.id)}>
            <Box>
              <MovieCard movie={mv}></MovieCard>
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default UpComingMoviesList;

import React from "react";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {"Rate:" + movie.vote_average}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;

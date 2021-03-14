import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const MovieCard = ({ movie }) => {
  const imgpath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Card>
      <CardActionArea>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs={5}>
            <img src={imgpath} style={{ maxHeight: "200px" }} />
          </Grid>
          <Grid item xs={7}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.overview.substring(0, 100) + "..."}
              </Typography>
              <Typography gutterBottom variant="h6" component="h6">
                {"Rate:" + movie.vote_average}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;

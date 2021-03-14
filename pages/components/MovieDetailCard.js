import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
export const MovieDetailCard = ({ moviedetail }) => {
  return (
    <div>
      <Paper>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <img
              src={`https://image.tmdb.org/t/p/w500${moviedetail.poster_path}`}
              alt={"movie.png"}
            />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography gutterBottom variant="h3" component="h1">
              {moviedetail.original_title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              {moviedetail.overview}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              <strong>Langue : </strong>
              <span>
                {moviedetail.spoken_languages
                  .map((langues) => langues.name)
                  .join(",")}
              </span>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              <strong>Genres : </strong>
              <span>
                {moviedetail.genres.map((genre) => genre.name).join(",")}
              </span>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              <strong>Release Date : </strong>
              <span>{moviedetail.release_date}</span>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              <strong>Rate : </strong>
              <span>{moviedetail.vote_average}</span>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              <strong>Production Companies : </strong>
              <span>
                {moviedetail.production_companies
                  .map((company) => company.name)
                  .join(",")}
              </span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Production Country : </strong>
              <span>
                {moviedetail.production_countries
                  .map((country) => country.name)
                  .join(",")}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

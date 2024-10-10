import React from 'react'
import {  Grid2 } from '@mui/material';

import useStyles from './styles'
import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
    const classes = useStyles();
    const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid2 container className={classes.moviesContainer}>
        {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
            <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid2>
  )
}

export default MovieList
import React from 'react'
import {  Grid2 } from '@mui/material';

import useStyles from './styles'
import { Movie } from '..';

const MovieList = ({ movies }) => {
    const classes = useStyles();
    console.log('movie list')

  return (
    <Grid2 container className={classes.moviesContainer}>
        {movies.results.map((movie, i) => (
            <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid2>
  )
}

export default MovieList
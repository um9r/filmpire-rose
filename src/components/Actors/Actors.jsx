import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid2, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import useStyles from './styles'
import { useGetActorsDetailsQuery, useGetMovieByActorIdQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';

const Actors = () => {
    const { id } = useParams();
    const history = useHistory();
    const classes = useStyles();
    const [page, setPage] = useState(1);

    const { data, isFetching, error } = useGetActorsDetailsQuery(id);
    const { data: movies } = useGetMovieByActorIdQuery({ id, page })

    if (isFetching) {
      return (
        <Box display='flex' justifyContent='center'>
          <CircularProgress size='8rem' />
        </Box>
      );
    }
    if (error) {
      return (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color='primary'>
            Go back
          </Button>
        </Box>
      );
    }

  return (
    <>
      <Grid2 container spacing={3}>
        <Grid2 item lg={5} xl={4}>
          <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
          alt={data.name}
          />
        </Grid2>
        <Grid2 item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <Typography variant='h2' gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant='h5' gutterBottom>
           Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant='body1' align='justify' component='p'>
            {data?.biography || 'Sorry, no biography yet...'}
          </Typography>
          <Box marginTop='2rem' display='flex' justifyContent='space-around'>
            <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color='primary'>
              Back
            </Button>
          </Box>
        </Grid2>
      </Grid2>
      <Box margin='2rem 0'>
        <Typography variant='h2' gutterBottom align='center'>
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={8} />}
        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </>
  )
}

export default Actors
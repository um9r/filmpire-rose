import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid2, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const Actors = () => {
    const { id } = useParams()
  return (
    <div>
      Actors - {id}
    </div>
  )
}

export default Actors
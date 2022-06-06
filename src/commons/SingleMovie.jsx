import { Backdrop, Button, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react'

const SingleMovie = ({ movie, mode }) => {
  return (
    <Card sx={{ maxWidth: 650, bgcolor: 'secondary.main' }}>
      <CardMedia
        component="img"
        height="350"
        image={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2${movie.poster_path}`}
        alt="movie image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color: `${mode ? 'white' : ''}`}}>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color: `${mode ? 'white' : ''}`}}>
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SingleMovie
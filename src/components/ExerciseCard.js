import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ maxWidth: '100%', height: 'auto' }} />
    <Stack direction="row" sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
      <Button sx={{ color: '#fff', background: '#474F7A', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', mb: '10px' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', mb: '10px' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' }, mt: '11px', mb: '10px' }} textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;

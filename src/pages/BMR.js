// BMR.js
import React, { useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';

const BMR = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmr, setBMR] = useState(null);

  const calculateBMR = () => {
    if (age && gender && weight && height) {
      let bmrValue = 0;
      if (gender === 'male') {
        bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === 'female') {
        bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      setBMR(bmrValue.toFixed(2));
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <Box mt="80px" px="20px" minHeight="calc(100vh - 200px)">
      <Typography variant="h4" fontWeight="bold" mb="40px">Calculate Your BMR</Typography>
      <Stack spacing={2}>
        <TextField
          type="number"
          label="Age"
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          select
          label="Gender"
          variant="outlined"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
        <TextField
          type="number"
          label="Weight (kg)"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          type="number"
          label="Height (cm)"
          variant="outlined"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={calculateBMR}>Calculate BMR</Button>
      </Stack>
      {bmr && (
        <Typography variant="h5" fontWeight="bold" mt="20px">
          Your BMR is: {bmr} calories/day
        </Typography>
      )}
    </Box>
  );
};

export default BMR;

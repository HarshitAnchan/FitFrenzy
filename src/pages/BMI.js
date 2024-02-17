// BMI.js
import React, { useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <Box mt="80px" px="20px" minHeight="calc(100vh - 200px)"> {/* Adjusted minHeight to push footer downwards */}
      <Typography variant="h4" fontWeight="bold" mb="40px">Calculate Your BMI</Typography>
      <Stack spacing={2}>
        <TextField
          type="number"
          label="Height (cm)"
          variant="outlined"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <TextField
          type="number"
          label="Weight (kg)"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={calculateBMI}>Calculate BMI</Button>
      </Stack>
      {bmi && (
        <Typography variant="h5" fontWeight="bold" mt="20px">
          Your BMI is: {bmi}
        </Typography>
      )}
    </Box>
  );
};

export default BMI;

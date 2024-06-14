import React, { useState } from 'react';
import './index.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(2)); // Adjusted toFixed() to display BMI with two decimal points

      let calories;
      if (bmiValue < 18.5) {
        calories = Math.round(25 * weight);
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        calories = Math.round(20 * weight);
      } else {
        calories = Math.round(15 * weight);
      }

      setMessage(`Your BMI is ${bmiValue}. You need approximately ${calories} calories per day.`);
    }
  };

  const reload = () => {
    window.location.reload();
  };

  let imgSrc = null;
  if (bmi > 0) {
    if (bmi < 25) {
      imgSrc = require('./underweight.png');
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('./healthy.png');
    } else {
      imgSrc = require('./overweight.png');
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload}>Reload</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

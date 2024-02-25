/*
import React from 'react';

const PizzaCard = ({ pizza }) => {
  return (
    <div className="pizza-card" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
      <h3>Pizza Order</h3>
      <p><strong>Type:</strong> {pizza.type}</p>
      <p><strong>Size:</strong> {pizza.size}</p>
      <p><strong>Base:</strong> {pizza.base}</p>
    </div>
  );
};

export default PizzaCard;
*/

/*
import React from 'react';

const PizzaCard = ({ pizza }) => {
  return (
    <div className={`pizza-card ${pizza.stage.toLowerCase().replace(/\s+/g, '-')}`} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
      <h3>Pizza Order</h3>
      <p><strong>Type:</strong> {pizza.type}</p>
      <p><strong>Size:</strong> {pizza.size}</p>
      <p><strong>Base:</strong> {pizza.base}</p>
      <p><strong>Stage:</strong> {pizza.stage}</p>
      <p><strong>Time Spent:</strong> {pizza.timeSpent}</p>
    </div>
  );
};

export default PizzaCard;
*/ 

// ! 

/*
import React from 'react';

const PizzaCard = ({ pizza }) => {
  // Function to calculate the class name based on time spent
  const calculateClassName = () => {
    if (pizza.timeSpent > 180) { // 3 minutes in seconds
      return 'pizza-card overdue';
    } else {
      return 'pizza-card';
    }
  };

  return (
    <div className={calculateClassName()} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
      <h3>Pizza Order</h3>
      <p><strong>Type:</strong> {pizza.type}</p>
      <p><strong>Size:</strong> {pizza.size}</p>
      <p><strong>Base:</strong> {pizza.base}</p>
      <p><strong>Stage:</strong> {pizza.stage}</p>
      <p><strong>Time Spent:</strong> {pizza.timeSpent}</p>
    </div>
  );
};

export default PizzaCard;
*/

/*
import React from 'react';

const PizzaCard = ({ pizza, timeSpent }) => {
  // Function to calculate the class name based on time spent
  const calculateClassName = () => {
    if (timeSpent > 180) { // 3 minutes in seconds
      return 'pizza-card overdue';
    } else {
      return 'pizza-card';
    }
  };

  return (
    <div className={calculateClassName()} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
      <h3>Pizza Order</h3>
      <p><strong>Type:</strong> {pizza.type}</p>
      <p><strong>Size:</strong> {pizza.size}</p>
      <p><strong>Base:</strong> {pizza.base}</p>
      <p><strong>Stage:</strong> {pizza.stage}</p>
      <p><strong>Time Spent:</strong> {{timeSpent}}</p>
    </div>
  );
};

export default PizzaCard;
*/

// * Working component 

/*

import React, { useState, useEffect } from 'react';

const PizzaCard = ({ pizza }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  // Function to calculate the class name based on time spent
  const calculateClassName = () => {
    if (timeElapsed > 180) { // 3 minutes in seconds
      return 'pizza-card overdue';
    } else {
      return 'pizza-card';
    }
  };

  return (
    <div className={calculateClassName()} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
      <h3>Pizza Order</h3>
      <p><strong>Type:</strong> {pizza.type}</p>
      <p><strong>Size:</strong> {pizza.size}</p>
      <p><strong>Base:</strong> {pizza.base}</p>
      <p><strong>Stage:</strong> {pizza.stage}</p>
      <p><strong>Time Spent:</strong> {formatTime(timeElapsed)}</p>
    </div>
  );
};

export default PizzaCard;

*/

// * Styled component: 

import React, { useState, useEffect } from 'react';

const PizzaCard = ({ pizza }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  // Function to calculate the class name based on time spent
  const calculateClassName = () => {
    if (timeElapsed > 180) { // 3 minutes in seconds
      return 'pizza-card overdue';
    } else {
      return 'pizza-card';
    }
  };

  return (
    <div className={calculateClassName()} style={{
       border: '1px solid #ccc',
        borderRadius: '8px', padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s' 
       }}>
      <h3>Pizza Order</h3>
      <p><strong>Type:</strong> {pizza.type}</p>
      <p><strong>Size:</strong> {pizza.size}</p>
      <p><strong>Base:</strong> {pizza.base}</p>
      <p><strong>Stage:</strong> {pizza.stage}</p>
      <p><strong>Time Spent:</strong> {formatTime(timeElapsed)}</p>
    </div>
  );
};

export default PizzaCard;

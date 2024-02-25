/*
import React from 'react';

const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked, onCancel }) => {
  return (
    <div className="pizza-stages-container">
      <div className="stage">
        <h3>Order Placed</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <button onClick={() => onMoveToNextStage(pizza.id)}>Next</button>
              <button onClick={() => onCancel(pizza.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order in Making</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order in Making').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <button onClick={() => onMoveToNextStage(pizza.id)}>Next</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Ready</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Ready').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <button onClick={() => onPicked(pizza.id)}>Picked</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Picked</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Picked').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaStagesSection;
*/


// * Working code: 
/*
import React from 'react';
const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked, onCancel }) => {
  return (
    <div className="pizza-stages-container">
      <div className="stage">
        <h3>Order Placed</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {pizza.timeSpent}</p>
              <button onClick={() => onMoveToNextStage(pizza.id)}>Next</button>
              <button onClick={() => onCancel(pizza.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order in Making</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order in Making').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {pizza.timeSpent}</p>
              <button onClick={() => onMoveToNextStage(pizza.id)}>Next</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Ready</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Ready').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {pizza.timeSpent}</p>
              <button onClick={() => onPicked(pizza.id)}>Picked</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Picked</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Picked').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {pizza.timeSpent}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PizzaStagesSection;
*/

/*
// ! display as min and sec 

import React from 'react';

// Function to format time in minutes and seconds
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes} min ${seconds} sec`;
};

const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked, onCancel }) => {
  return (
    <div className="pizza-stages-container">
      <div className="stage">
        <h3>Order Placed</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p> 
              <button onClick={() => onMoveToNextStage(pizza.id)}>Next</button>
              <button onClick={() => onCancel(pizza.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default PizzaStagesSection;
*/

// * Working code with min & sec 

/*
import React from 'react';

const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked, onCancel }) => {
  
  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  return (
    <div className="pizza-stages-container">
      <div className="stage">
        <h3>Order Placed</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => onMoveToNextStage(pizza.id)}>Next</button>
              <button onClick={() => onCancel(pizza.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order in Making</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order in Making').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => onMoveToNextStage(pizza.id)}>Next</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Ready</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Ready').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => onPicked(pizza.id)}>Picked</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Picked</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Picked').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaStagesSection;

*/

// * count timing in each and every stage
/*

import React from 'react';

const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked, onCancel }) => {
  
  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  return (
    <div className="pizza-stages-container">
      <div className="stage">
        <h3>Order Placed</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
              <button onClick={() => {
                onCancel(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order in Making</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order in Making').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Ready</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Ready').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onPicked(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Picked</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Picked</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Picked').map(pizza => (
            <li key={pizza.id}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaStagesSection;
*/ 

// * Working code: 

/*
import React from 'react';

const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked, onCancel }) => {
  
  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  // Function to determine if a pizza is overdue
  const isOverdue = (timeSpent) => {
    return timeSpent > 60; // Check if timeSpent is greater than 60 seconds (1 minute)
  };

  return (
    <div className="pizza-stages-container">
      <div className="stage">
        <h3>Order Placed</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id} className={isOverdue(pizza.timeSpent) ? 'overdue' : ''}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
              <button onClick={() => {
                onCancel(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order in Making</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order in Making').map(pizza => (
            <li key={pizza.id} className={isOverdue(pizza.timeSpent) ? 'overdue' : ''}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Ready</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Ready').map(pizza => (
            <li key={pizza.id} className={isOverdue(pizza.timeSpent) ? 'overdue' : ''}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onPicked(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Picked</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage">
        <h3>Order Picked</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Picked').map(pizza => (
            <li key={pizza.id} className={isOverdue(pizza.timeSpent) ? 'overdue' : ''}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaStagesSection;
*/ 

// * styled code + working perfectly:
/* 
import React from 'react';
import './PizzaStagesSection.css';

const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked, onCancel }) => {
  
  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  // Function to determine if a pizza is overdue
  const isOverdue = (timeSpent) => {
    return timeSpent > 10; // Check if timeSpent is greater than 60 seconds (1 minute)
  };

  return (
    <div className="pizza-stages-container">
      <div className="stage-container stage">
        <h3>Order Placed</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
              <button onClick={() => {
                onCancel(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3>Order in Making</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order in Making').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3>Order Ready</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Ready').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onPicked(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Picked</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3>Order Picked</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Picked').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaStagesSection;
*/ 

// !

// * Working perfect: 

/*

import React from 'react';
import './PizzaStagesSection.css';

const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked, onCancel }) => {
  
  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  // Function to determine if a pizza is overdue
  const isOverdue = (timeSpent) => {
    return timeSpent > 180; // Check if timeSpent is greater than 60 seconds (1 minute)
  };

  return (
    <div className="pizza-stages-container">
      <div className="stage-container stage">
        <h3 className="stage-header">Order Placed</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
              <button onClick={() => {
                onCancel(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Cancel</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3 className="stage-header">Order in Making</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order in Making').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3 className="stage-header">Order Ready</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Ready').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onPicked(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Ready to pick</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3 className="stage-header">Order Picked</h3>
        <ul>
          {pizzas.filter(pizza => pizza.stage === 'Order Picked').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button onClick={() => {
                onPicked(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Picked</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaStagesSection;

*/ 

// ***** everything fine: <p>Time Spent: {formatTime(pizza.timeSpent)}</p>

import React from 'react';
import './PizzaStagesSection.css';

const PizzaStagesSection = ({ pizzas, onMoveToNextStage, onPicked}) => {
  
  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  // Function to determine if a pizza is overdue
  const isOverdue = (timeSpent) => {
    return timeSpent > 180; // Check if timeSpent is greater than 60 seconds (1 minute)
  };

  return (
    <div className="pizza-stages-container">
      <div className="stage-container stage">
        <h3 className="stage-header">Order Placed</h3>
        <ul className="pizza-details">
          {pizzas.filter(pizza => pizza.stage === 'Order Placed').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button className='next-button' onClick={() => {
                  onMoveToNextStage(pizza.id);
                  pizza.timeSpent = 0; // Resetting time spent
                }}>Next</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3 className="stage-header">Order in Making</h3>
        <ul className="pizza-details">
          {pizzas.filter(pizza => pizza.stage === 'Order in Making').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button className='next-button' onClick={() => {
                onMoveToNextStage(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Next</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3 className="stage-header">Order Ready</h3>
        <ul className="pizza-details">
          {pizzas.filter(pizza => pizza.stage === 'Order Ready').map(pizza => (
            <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
              <p>ID: {pizza.id}</p>
              <p>Type: {pizza.type}</p>
              <p>Size: {pizza.size}</p>
              <p>Base: {pizza.base}</p>
              <p>Time Spent: {formatTime(pizza.timeSpent)}</p>
              <button className='next-button' onClick={() => {
                onPicked(pizza.id);
                pizza.timeSpent = 0; // Resetting time spent
              }}>Ready to pick</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="stage-container stage">
        <h3 className="stage-header">Order Picked</h3>
          <ul className="pizza-details">
            {pizzas.filter(pizza => pizza.stage === 'Order Picked').map(pizza => (
              <li key={pizza.id} className={`pizza-item ${isOverdue(pizza.timeSpent) ? 'overdue' : ''}`}>
                <p>ID: {pizza.id}</p>
                <p>Type: {pizza.type}</p>
                <p>Size: {pizza.size}</p>
                <p>Base: {pizza.base}</p>
                <p>Time Spent: {pizza.stage === 'Order Picked' ? 'Order picked' : formatTime(pizza.timeSpent)}</p>
                <button className='next-button' onClick={() => {
                  onPicked(pizza.id);
                  pizza.timeSpent = 0; // Resetting time spent
                }}>Picked</button>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default PizzaStagesSection;

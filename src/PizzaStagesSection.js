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

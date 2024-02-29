import React, { useState, useEffect } from 'react';
import './App.css';
import PizzaForm from './PizzaForm';
import PizzaCard from './PizzaCard';
import MainSection from './MainSection';
import PizzaStagesSection from './PizzaStagesSection';

function App() {
  const [pizzasInProgress, setPizzasInProgress] = useState([]);
  const [totalPizzasDelivered, setTotalPizzasDelivered] = useState(0);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  useEffect(() => {
    const timers = {};
    pizzasInProgress.forEach(pizza => {
      if (pizza.stage !== 'Order Picked') {
        timers[pizza.id] = setInterval(() => {
          setPizzasInProgress(prevPizzas => (
            prevPizzas.map(pizzaItem => {
              if (pizzaItem.id === pizza.id) {
                const newRemainingTime = pizzaItem.remainingTime - 1;
                if (newRemainingTime <= 0) {
                  clearInterval(timers[pizza.id]);
                  return { ...pizzaItem, remainingTime: 0 };
                }
                return { ...pizzaItem, remainingTime: newRemainingTime, timeSpent: pizzaItem.timeSpent + 1 };
              }
              return pizzaItem;
            })
          ));
        }, 1000);
      }
    });

    return () => {
      Object.values(timers).forEach(timerId => clearInterval(timerId));
    };
  }, [pizzasInProgress]);

  const handlePizzaSubmit = (orderDetails) => {
    if (pizzasInProgress.length < 10) {
      const orderId = Math.floor(Math.random() * 1000000);
      const pizzaOrder = { id: orderId, ...orderDetails, remainingTime: 900, stage: 'Order Placed', timeSpent: 0 };
      setPizzasInProgress([...pizzasInProgress, pizzaOrder]);
      alert('Your pizza order has been placed successfully!');
    } else {
      alert('Maximum limit of 10 pizza orders reached. Cannot accept more orders at the moment.');
    }
  };

  const handleCancelOrder = (orderId) => {
    setPizzasInProgress(pizzasInProgress.filter(pizza => pizza.id !== orderId));
    alert('Your pizza order has been cancelled.');
  };

  const handleMoveToNextStage = (orderId) => {
    setPizzasInProgress(prevPizzas =>
      prevPizzas.map(pizza => {
        if (pizza.id === orderId) {
          const newPizza = {
            ...pizza,
            stage: getNextStage(pizza.stage),
            timeSpent: 0 // Reset time spent when moving to the next stage
          };
          return newPizza;
        }
        return pizza;
      })
    );
  };

  const handlePicked = (orderId) => {
    setPizzasInProgress(prevPizzas =>
      prevPizzas.map(pizza => {
        if (pizza.id === orderId && pizza.stage === 'Order Ready') {
          return {
            ...pizza,
            stage: 'Order Picked',
            timeSpent: 0 // Reset time spent when the pizza is picked
          };
        }
        return pizza;
      })
    );
    setTotalPizzasDelivered(prevTotal => prevTotal + 1);
  };

  const getNextStage = (currentStage) => {
    switch (currentStage) {
      case 'Order Placed':
        return 'Order in Making';
      case 'Order in Making':
        return 'Order Ready';
      default:
        return currentStage;
    }
  };

  return (
    <div className="App">
      <PizzaForm onSubmit={handlePizzaSubmit} />
      {pizzasInProgress.length > 0 && <PizzaCard pizza={pizzasInProgress[0]} />}
      <PizzaStagesSection
        pizzas={pizzasInProgress}
        onMoveToNextStage={handleMoveToNextStage}
        onPicked={handlePicked}
        onCancel={handleCancelOrder}
      />
      <MainSection
        pizzasInProgress={pizzasInProgress.map(pizza => ({ ...pizza, remainingTime: pizza.stage === 'Order Picked' ? 'Order Picked' : formatTime(pizza.remainingTime) }))}
        onCancel={handleCancelOrder}
        totalPizzasDelivered={totalPizzasDelivered}
      />
    </div>
  );
}

export default App;

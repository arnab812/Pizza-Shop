/*
import React, { useState, useEffect } from 'react';
import './App.css';
import PizzaForm from './PizzaForm';
import PizzaCard from './PizzaCard';
import MainSection from './MainSection';
import PizzaStagesSection from './PizzaStagesSection';

function App() {
  const [pizzasInProgress, setPizzasInProgress] = useState([]);
  const [currentPizzaOrder, setCurrentPizzaOrder] = useState(null);
  const [totalPizzasDelivered, setTotalPizzasDelivered] = useState(0);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  const handlePizzaSubmit = (orderDetails) => {
    if (pizzasInProgress.length < 10) {
      const orderId = Math.floor(Math.random() * 1000000);
      const pizzaOrder = { id: orderId, ...orderDetails, remainingTime: 900, stage: 'Order Placed' }; // 15 minutes in seconds
      setPizzasInProgress([...pizzasInProgress, pizzaOrder]);
      setCurrentPizzaOrder(pizzaOrder);
      // Show notification for successful order placement
      alert('Your pizza order has been placed successfully!');
    } else {
      // Show notification for maximum limit reached
      alert('Maximum limit of 10 pizza orders reached. Cannot accept more orders at the moment.');
    }
  };

  const handleCancelOrder = (orderId) => {
    setPizzasInProgress(pizzasInProgress.filter(pizza => pizza.id !== orderId));
    if (currentPizzaOrder && currentPizzaOrder.id === orderId) {
      setCurrentPizzaOrder(null);
    }
    // Show notification for order cancellation
    alert('Your pizza order has been cancelled.');
  };

  const handleMoveToNextStage = (orderId) => {
    setPizzasInProgress(prevPizzas => (
      prevPizzas.map(pizza => {
        if (pizza.id === orderId) {
          switch (pizza.stage) {
            case 'Order Placed':
              return { ...pizza, stage: 'Order in Making' };
            case 'Order in Making':
              return { ...pizza, stage: 'Order Ready' };
            default:
              return pizza;
          }
        }
        return pizza;
      })
    ));
  };

  const handlePicked = (orderId) => {
    setPizzasInProgress(prevPizzas => (
      prevPizzas.map(pizza => {
        if (pizza.id === orderId && pizza.stage === 'Order Ready') {
          setTotalPizzasDelivered(prevTotal => prevTotal + 1);
          return { ...pizza, stage: 'Order Picked' };
        }
        return pizza;
      })
    ));
  };

  useEffect(() => {
    if (currentPizzaOrder) {
      const timerId = setInterval(() => {
        setPizzasInProgress(prevPizzas => (
          prevPizzas.map(pizza => {
            if (pizza.id === currentPizzaOrder.id) {
              const newRemainingTime = pizza.remainingTime - 1;
              if (newRemainingTime <= 0) {
                clearInterval(timerId);
                return { ...pizza, remainingTime: 0 };
              }
              return { ...pizza, remainingTime: newRemainingTime };
            }
            return pizza;
          })
        ));
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [currentPizzaOrder]);

  return (
    <div className="App">
      <PizzaForm onSubmit={handlePizzaSubmit} />
      {currentPizzaOrder && <PizzaCard pizza={currentPizzaOrder} />}
      <MainSection pizzasInProgress={pizzasInProgress.map(pizza => ({ ...pizza, remainingTime: formatTime(pizza.remainingTime) }))} onCancel={handleCancelOrder} totalPizzasDelivered={totalPizzasDelivered} />
      <PizzaStagesSection
        pizzas={pizzasInProgress}
        onMoveToNextStage={handleMoveToNextStage}
        onPicked={handlePicked}
        onCancel={handleCancelOrder}
      />
    </div>
  );
}

export default App;
*/

/*
import React, { useState, useEffect } from 'react';
import './App.css';
import PizzaForm from './PizzaForm';
import PizzaCard from './PizzaCard';
import MainSection from './MainSection';
import PizzaStagesSection from './PizzaStagesSection';

function App() {
  const [pizzasInProgress, setPizzasInProgress] = useState([]);
  const [currentPizzaOrder, setCurrentPizzaOrder] = useState(null);
  const [totalPizzasDelivered, setTotalPizzasDelivered] = useState(0);
  const [timers, setTimers] = useState({});

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  const handlePizzaSubmit = (orderDetails) => {
    if (pizzasInProgress.length < 10) {
      const orderId = Math.floor(Math.random() * 1000000);
      const pizzaOrder = { id: orderId, ...orderDetails, remainingTime: 900, stage: 'Order Placed' }; // 15 minutes in seconds
      setPizzasInProgress([...pizzasInProgress, pizzaOrder]);
      setCurrentPizzaOrder(pizzaOrder);
      // Show notification for successful order placement
      alert('Your pizza order has been placed successfully!');
      // Start timer for the new pizza order
      startTimer(pizzaOrder);
    } else {
      // Show notification for maximum limit reached
      alert('Maximum limit of 10 pizza orders reached. Cannot accept more orders at the moment.');
    }
  };

  const startTimer = (pizzaOrder) => {
    const timerId = setInterval(() => {
      setPizzasInProgress(prevPizzas => (
        prevPizzas.map(pizza => {
          if (pizza.id === pizzaOrder.id) {
            const newRemainingTime = pizza.remainingTime - 1;
            if (newRemainingTime <= 0) {
              clearInterval(timerId);
              return { ...pizza, remainingTime: 0 };
            }
            return { ...pizza, remainingTime: newRemainingTime };
          }
          return pizza;
        })
      ));
    }, 1000);
    // Store the timer ID for the pizza order
    setTimers(prevTimers => ({ ...prevTimers, [pizzaOrder.id]: timerId }));
  };

  const handleCancelOrder = (orderId) => {
    clearInterval(timers[orderId]); // Clear the timer associated with the cancelled order
    setPizzasInProgress(pizzasInProgress.filter(pizza => pizza.id !== orderId));
    if (currentPizzaOrder && currentPizzaOrder.id === orderId) {
      setCurrentPizzaOrder(null);
    }
    // Show notification for order cancellation
    alert('Your pizza order has been cancelled.');
  };

  const handleMoveToNextStage = (orderId) => {
    setPizzasInProgress(prevPizzas => (
      prevPizzas.map(pizza => {
        if (pizza.id === orderId) {
          switch (pizza.stage) {
            case 'Order Placed':
              return { ...pizza, stage: 'Order in Making' };
            case 'Order in Making':
              return { ...pizza, stage: 'Order Ready' };
            default:
              return pizza;
          }
        }
        return pizza;
      })
    ));
  };

  const handlePicked = (orderId) => {
    setPizzasInProgress(prevPizzas => (
      prevPizzas.map(pizza => {
        if (pizza.id === orderId && pizza.stage === 'Order Ready') {
          setTotalPizzasDelivered(prevTotal => prevTotal + 1);
          return { ...pizza, stage: 'Order Picked' };
        }
        return pizza;
      })
    ));
  };

  return (
    <div className="App">
      <PizzaForm onSubmit={handlePizzaSubmit} />
      {currentPizzaOrder && <PizzaCard pizza={currentPizzaOrder} />}
      <MainSection pizzasInProgress={pizzasInProgress.map(pizza => ({ ...pizza, remainingTime: formatTime(pizza.remainingTime) }))} onCancel={handleCancelOrder} totalPizzasDelivered={totalPizzasDelivered} />
      <PizzaStagesSection
        pizzas={pizzasInProgress}
        onMoveToNextStage={handleMoveToNextStage}
        onPicked={handlePicked}
        onCancel={handleCancelOrder}
      />
    </div>
  );
}

export default App;
*/


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PizzaForm from './PizzaForm';
// import PizzaCard from './PizzaCard';
// import MainSection from './MainSection';
// import PizzaStagesSection from './PizzaStagesSection';

// function App() {
//   const [pizzasInProgress, setPizzasInProgress] = useState([]);
//   const [currentPizzaOrder, setCurrentPizzaOrder] = useState(null);
//   const [totalPizzasDelivered, setTotalPizzasDelivered] = useState(0);
//   const [timers, setTimers] = useState({});

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     return `${minutes} min ${seconds} sec`;
//   };

//   const handlePizzaSubmit = (orderDetails) => {
//     if (pizzasInProgress.length < 10) {
//       const orderId = Math.floor(Math.random() * 1000000);
//       const pizzaOrder = { id: orderId, ...orderDetails, remainingTime: 900, stage: 'Order Placed' }; // 15 minutes in seconds
//       setPizzasInProgress([...pizzasInProgress, pizzaOrder]);
//       setCurrentPizzaOrder(pizzaOrder);
//       // Show notification for successful order placement
//       alert('Your pizza order has been placed successfully!');
//       // Start timer for the new pizza order
//       startTimer(pizzaOrder);
//     } else {
//       // Show notification for maximum limit reached
//       alert('Maximum limit of 10 pizza orders reached. Cannot accept more orders at the moment.');
//     }
//   };

//   const startTimer = (pizzaOrder) => {
//     const timerId = setInterval(() => {
//       setPizzasInProgress(prevPizzas => (
//         prevPizzas.map(pizza => {
//           if (pizza.id === pizzaOrder.id) {
//             const newRemainingTime = pizza.remainingTime - 1;
//             if (newRemainingTime <= 0) {
//               clearInterval(timerId);
//               return { ...pizza, remainingTime: 0 };
//             }
//             return { ...pizza, remainingTime: newRemainingTime };
//           }
//           return pizza;
//         })
//       ));
//     }, 1000);
//     // Store the timer ID for the pizza order
//     setTimers(prevTimers => ({ ...prevTimers, [pizzaOrder.id]: timerId }));
//   };

//   const handleCancelOrder = (orderId) => {
//     clearInterval(timers[orderId]); // Clear the timer associated with the cancelled order
//     setPizzasInProgress(pizzasInProgress.filter(pizza => pizza.id !== orderId));
//     if (currentPizzaOrder && currentPizzaOrder.id === orderId) {
//       setCurrentPizzaOrder(null);
//     }
//     // Show notification for order cancellation
//     alert('Your pizza order has been cancelled.');
//   };

//   const handleMoveToNextStage = (orderId) => {
//     setPizzasInProgress(prevPizzas => (
//       prevPizzas.map(pizza => {
//         if (pizza.id === orderId) {
//           switch (pizza.stage) {
//             case 'Order Placed':
//               return { ...pizza, stage: 'Order in Making' };
//             case 'Order in Making':
//               return { ...pizza, stage: 'Order Ready' };
//             default:
//               return pizza;
//           }
//         }
//         return pizza;
//       })
//     ));
//   };

//   const handlePicked = (orderId) => {
//     setPizzasInProgress(prevPizzas => (
//       prevPizzas.map(pizza => {
//         if (pizza.id === orderId && pizza.stage === 'Order Ready') {
//           // Stop timer for the picked order
//           clearInterval(timers[orderId]);
//           setTotalPizzasDelivered(prevTotal => prevTotal + 1);
//           return { ...pizza, stage: 'Order Picked' };
//         }
//         return pizza;
//       })
//     ));
//   };

//   return (
//     <div className="App">
//       <PizzaForm onSubmit={handlePizzaSubmit} />
//       {currentPizzaOrder && <PizzaCard pizza={currentPizzaOrder} />}
//       <MainSection pizzasInProgress={pizzasInProgress.map(pizza => ({ ...pizza, remainingTime: pizza.stage === 'Order Picked' ? 'Order Picked' : formatTime(pizza.remainingTime) }))} onCancel={handleCancelOrder} totalPizzasDelivered={totalPizzasDelivered} />
//       <PizzaStagesSection
//         pizzas={pizzasInProgress}
//         onMoveToNextStage={handleMoveToNextStage}
//         onPicked={handlePicked}
//         onCancel={handleCancelOrder}
//       />
//     </div>
//   );
// }

// export default App;

// ! 

/*
import React, { useState, useEffect } from 'react';
import './App.css';
import PizzaForm from './PizzaForm';
import PizzaCard from './PizzaCard';
import MainSection from './MainSection';
import PizzaStagesSection from './PizzaStagesSection';

function App() {
  const [pizzasInProgress, setPizzasInProgress] = useState([]);
  const [currentPizzaOrder, setCurrentPizzaOrder] = useState(null);
  const [totalPizzasDelivered, setTotalPizzasDelivered] = useState(0);
  const [timers, setTimers] = useState({});

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  useEffect(() => {
    // Update time spent for each pizza order every second
    const intervalId = setInterval(() => {
      setPizzasInProgress(prevPizzas =>
        prevPizzas.map(pizza => ({
          ...pizza,
          timeSpent: pizza.timeSpent + 1 // Increment time spent
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePizzaSubmit = (orderDetails) => {
    if (pizzasInProgress.length < 10) {
      const orderId = Math.floor(Math.random() * 1000000);
      const pizzaOrder = { id: orderId, ...orderDetails, timeSpent: 0, stage: 'Order Placed' };
      setPizzasInProgress([...pizzasInProgress, pizzaOrder]);
      setCurrentPizzaOrder(pizzaOrder);
      // Show notification for successful order placement
      alert('Your pizza order has been placed successfully!');
    } else {
      // Show notification for maximum limit reached
      alert('Maximum limit of 10 pizza orders reached. Cannot accept more orders at the moment.');
    }
  };

  const handleCancelOrder = (orderId) => {
    clearInterval(timers[orderId]); // Clear the timer associated with the cancelled order
    setPizzasInProgress(pizzasInProgress.filter(pizza => pizza.id !== orderId));
    if (currentPizzaOrder && currentPizzaOrder.id === orderId) {
      setCurrentPizzaOrder(null);
    }
    // Show notification for order cancellation
    alert('Your pizza order has been cancelled.');
  };

  return (
    <div className="App">
      <PizzaForm onSubmit={handlePizzaSubmit} />
      {pizzasInProgress.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
      <MainSection pizzasInProgress={pizzasInProgress.map(pizza => ({ ...pizza, remainingTime: 'N/A' }))} onCancel={handleCancelOrder} totalPizzasDelivered={totalPizzasDelivered} />
      <PizzaStagesSection
        pizzas={pizzasInProgress}
        onMoveToNextStage={() => { }}
        onPicked={() => { }}
        onCancel={handleCancelOrder}
      />
    </div>
  );
}

export default App;
*/

// !!!!!!

/*
import React, { useState, useEffect } from 'react';
import './App.css';
import PizzaForm from './PizzaForm';
import PizzaCard from './PizzaCard';
import MainSection from './MainSection';
import PizzaStagesSection from './PizzaStagesSection';

function App() {
  const [pizzasInProgress, setPizzasInProgress] = useState([]);
  const [currentPizzaOrder, setCurrentPizzaOrder] = useState(null);
  const [totalPizzasDelivered, setTotalPizzasDelivered] = useState(0);
  const [timers, setTimers] = useState({});

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  useEffect(() => {
    // Update time spent for each pizza order every second
    const intervalId = setInterval(() => {
      setPizzasInProgress(prevPizzas =>
        prevPizzas.map(pizza => ({
          ...pizza,
          timeSpent: pizza.timeSpent + 1 // Increment time spent
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePizzaSubmit = (orderDetails) => {
    if (pizzasInProgress.length < 10) {
      const orderId = Math.floor(Math.random() * 1000000);
      const pizzaOrder = { id: orderId, ...orderDetails, timeSpent: 0, stage: 'Order Placed' };
      setPizzasInProgress([...pizzasInProgress, pizzaOrder]);
      setCurrentPizzaOrder(pizzaOrder);
      // Show notification for successful order placement
      alert('Your pizza order has been placed successfully!');
    } else {
      // Show notification for maximum limit reached
      alert('Maximum limit of 10 pizza orders reached. Cannot accept more orders at the moment.');
    }
  };

  const handleCancelOrder = (orderId) => {
    clearInterval(timers[orderId]); // Clear the timer associated with the cancelled order
    setPizzasInProgress(pizzasInProgress.filter(pizza => pizza.id !== orderId));
    if (currentPizzaOrder && currentPizzaOrder.id === orderId) {
      setCurrentPizzaOrder(null);
    }
    // Show notification for order cancellation
    alert('Your pizza order has been cancelled.');
  };

  return (
    <div className="App">
      <PizzaForm onSubmit={handlePizzaSubmit} />
      {pizzasInProgress.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
      <MainSection pizzasInProgress={pizzasInProgress.map(pizza => ({ ...pizza, remainingTime: 'N/A' }))} onCancel={handleCancelOrder} totalPizzasDelivered={totalPizzasDelivered} />
      <PizzaStagesSection
        pizzas={pizzasInProgress}
        onMoveToNextStage={() => { }}
        onPicked={() => { }}
        onCancel={handleCancelOrder}
      />
    </div>
  );
}

export default App;
*/

// !! 

/*
import React, { useState, useEffect } from 'react';
import './App.css';
import PizzaForm from './PizzaForm';
import PizzaCard from './PizzaCard';
import MainSection from './MainSection';
import PizzaStagesSection from './PizzaStagesSection';

function App() {
  const [pizzasInProgress, setPizzasInProgress] = useState([]);
  const [currentPizzaOrder, setCurrentPizzaOrder] = useState(null);
  const [totalPizzasDelivered, setTotalPizzasDelivered] = useState(0);
  const [timers, setTimers] = useState({});

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };

  useEffect(() => {
    // Update time spent for each pizza order every second
    const intervalId = setInterval(() => {
      setPizzasInProgress(prevPizzas =>
        prevPizzas.map(pizza => ({
          ...pizza,
          timeSpent: pizza.timeSpent + 1 // Increment time spent
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePizzaSubmit = (orderDetails) => {
    if (pizzasInProgress.length < 10) {
      const orderId = Math.floor(Math.random() * 1000000);
      const pizzaOrder = { id: orderId, ...orderDetails, remainingTime: 900, stage: 'Order Placed', timeSpent: 0 }; // Initialize timeSpent to 0
      setPizzasInProgress([...pizzasInProgress, pizzaOrder]);
      setCurrentPizzaOrder(pizzaOrder);
      // Show notification for successful order placement
      alert('Your pizza order has been placed successfully!');
      // Start timer for the new pizza order
      startTimer(pizzaOrder);
    } else {
      // Show notification for maximum limit reached
      alert('Maximum limit of 10 pizza orders reached. Cannot accept more orders at the moment.');
    }
  };
  

  const startTimer = (pizzaOrder) => {
    const timerId = setInterval(() => {
      setPizzasInProgress(prevPizzas => (
        prevPizzas.map(pizza => {
          if (pizza.id === pizzaOrder.id) {
            const newRemainingTime = pizza.remainingTime - 1;
            if (newRemainingTime <= 0) {
              clearInterval(timerId);
              return { ...pizza, remainingTime: 0 };
            }
            return { ...pizza, remainingTime: newRemainingTime };
          }
          return pizza;
        })
      ));
    }, 1000);
    // Store the timer ID for the pizza order
    setTimers(prevTimers => ({ ...prevTimers, [pizzaOrder.id]: timerId }));
  };

  const handleCancelOrder = (orderId) => {
    clearInterval(timers[orderId]); // Clear the timer associated with the cancelled order
    setPizzasInProgress(pizzasInProgress.filter(pizza => pizza.id !== orderId));
    if (currentPizzaOrder && currentPizzaOrder.id === orderId) {
      setCurrentPizzaOrder(null);
    }
    // Show notification for order cancellation
    alert('Your pizza order has been cancelled.');
  };

  const handleMoveToNextStage = (orderId) => {
    setPizzasInProgress(prevPizzas => (
      prevPizzas.map(pizza => {
        if (pizza.id === orderId) {
          switch (pizza.stage) {
            case 'Order Placed':
              return { ...pizza, stage: 'Order in Making' };
            case 'Order in Making':
              return { ...pizza, stage: 'Order Ready' };
            default:
              return pizza;
          }
        }
        return pizza;
      })
    ));
  };

  const handlePicked = (orderId) => {
    setPizzasInProgress(prevPizzas => (
      prevPizzas.map(pizza => {
        if (pizza.id === orderId && pizza.stage === 'Order Ready') {
          // Stop timer for the picked order
          clearInterval(timers[orderId]);
          setTotalPizzasDelivered(prevTotal => prevTotal + 1);
          return { ...pizza, stage: 'Order Picked' };
        }
        return pizza;
      })
    ));
  };

  return (
    <div className="App">
      <PizzaForm onSubmit={handlePizzaSubmit} />
      {currentPizzaOrder && <PizzaCard pizza={currentPizzaOrder} timeSpent={currentPizzaOrder.timeSpent} />}
      
      <PizzaStagesSection
        pizzas={pizzasInProgress}
        onMoveToNextStage={handleMoveToNextStage}
        onPicked={handlePicked}
        onCancel={handleCancelOrder}
      />

      <MainSection pizzasInProgress={pizzasInProgress.map(pizza => ({ ...pizza, remainingTime: pizza.stage === 'Order Picked' ? 'Order Picked' : formatTime(pizza.remainingTime) }))} onCancel={handleCancelOrder} totalPizzasDelivered={totalPizzasDelivered} />
    </div>
  );
}

export default App;

*/ 


// * Third Component: 

/*

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
                return { ...pizzaItem, remainingTime: newRemainingTime };
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
    setPizzasInProgress(prevPizzas => (
      prevPizzas.map(pizza => {
        if (pizza.id === orderId) {
          switch (pizza.stage) {
            case 'Order Placed':
              return { ...pizza, stage: 'Order in Making' };
            case 'Order in Making':
              return { ...pizza, stage: 'Order Ready' };
            default:
              return pizza;
          }
        }
        return pizza;
      })
    ));
  };

  const handlePicked = (orderId) => {
    setPizzasInProgress(prevPizzas => (
      prevPizzas.map(pizza => {
        if (pizza.id === orderId && pizza.stage === 'Order Ready') {
          setTotalPizzasDelivered(prevTotal => prevTotal + 1);
          return { ...pizza, stage: 'Order Picked' };
        }
        return pizza;
      })
    ));
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

*/ 


// * Fourth component: 

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

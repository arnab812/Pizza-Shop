import React from 'react';

const MainSection = ({ pizzasInProgress, onCancel, totalPizzasDelivered }) => {
  // Function to cancel an order
  const handleCancelOrder = (orderId) => {
    onCancel(orderId);
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px', padding: '20px' }}>
      <h2>Pizzas in Progress</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Stage</th>
              <th>Total Time Spent (time from order placed)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzasInProgress.map((pizza) => (
              <tr key={pizza.id} className={`pizza-status-${pizza.stage.toLowerCase().replace(/\s+/g, '-')}`}>
                <td>Order Id: {pizza.id}</td>
                <td>{pizza.stage}</td>
                <td>Remaining Time: {pizza.remainingTime}</td>
                <td>
                  {pizza.stage !== 'Order Picked' && pizza.stage !== 'Order Ready' && (
                    <button onClick={() => handleCancelOrder(pizza.id)} style={{ backgroundColor: 'red' }}>Cancel</button>
                  )}
                </td>
              </tr>
              ))}
          </tbody>
        </table>
        <table>
        <tr>
            <td>Total Pizzas Delivered Today: {totalPizzasDelivered}</td>
        </tr>
        </table>
      </div>
    </div>
  );
};

export default MainSection;

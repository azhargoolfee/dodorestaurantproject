import React from 'react';

const DrinksStep = ({totalPrice, drinks, handleQuantityChange }) => {
  return (
    <div>
        <div className="ordertitle">
          <span id='current' >Starters  </span>
          <span id='current'> ⎯⎯ Platters</span>
          <span id='current'> ⎯⎯ Mains</span>
          <span id='current'> ⎯⎯ Drinks</span>
          <span> ⎯⎯ Checkout</span>
      </div>
      <h2>Drinks</h2>
      <div className="total-price">Total Price: ${totalPrice}</div>
      {drinks.map(item => (
        <div key={item.id} className="order-item">
          <span>{item.name}</span>
          <span>${item.price}</span>
          <input
           id='orderinput'
            type="number"
            value={item.quantity}
            min={0}
            onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
};

export default DrinksStep;

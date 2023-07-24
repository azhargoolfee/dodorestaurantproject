import React from 'react';

const MainsStep = ({totalPrice, mains, handleQuantityChange }) => {
  return (
    <div>
        <div className="ordertitle">
          <span id='current' >Starters  </span>
          <span id='current'> ⎯⎯ Platters</span>
          <span id='current' > ⎯⎯ Mains</span>
          <span> ⎯⎯ Drinks</span>
          <span> ⎯⎯ Checkout</span>
      </div>
      <h2>Mains</h2>
      <div className="total-price">Total Price: ${totalPrice}</div>
      {mains.map(item => (
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

export default MainsStep;

import React from 'react';

const FrenchDrinksStep = ({totalPrice, drinks, handleQuantityChange }) => {
  return (
    <div>
        <div className="ordertitle">
          <span id='current' >Entrées  </span>
          <span id='current'> ⎯⎯ Plateaux</span>
          <span id='current'> ⎯⎯ Plat Principal</span>
          <span id='current'> ⎯⎯ Boissons</span>
          <span> ⎯⎯ Sortie de caisse</span>
      </div>
      <h2>Boissons</h2>
      <div className="total-price">Prix total: ${totalPrice}</div>
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

export default FrenchDrinksStep;

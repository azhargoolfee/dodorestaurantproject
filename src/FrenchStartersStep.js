import React from 'react';

const FrenchStartersStep = ({ totalPrice, starters, handleQuantityChange }) => {
  

  return (
    <div>
        <div className="ordertitle">
          <span id='current' >Entrées  </span>
          <span> ⎯⎯ Plateaux</span>
          <span> ⎯⎯ Plat Principal</span>
          <span> ⎯⎯ Boissons</span>
          <span> ⎯⎯ Sortie de caisse</span>
      </div>
      <h2>Entrées</h2>
      
      <div className="total-price">Prix total: ${totalPrice}</div>
      {starters.map(item => (
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

export default FrenchStartersStep;

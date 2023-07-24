import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutStep = ({ totalPrice, items }) => {
  const navigate = useNavigate();

  const handleConfirmAndPay = () => {
    navigate('/order-confirmation');
  };

  return (
    <div>
      <div className="ordertitle">
        <span id='current' >Starters  </span>
        <span id='current'> ⎯⎯ Platters</span>
        <span id='current'>  ⎯⎯ Mains</span>
        <span id='current'> ⎯⎯ Drinks</span>
        <span id='current'> ⎯⎯ Checkout</span>
      </div>

      <div className="selected-items">
        <h2>Selected Items</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: ${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-price">Total Price: ${totalPrice}</div>
      <div className="payment-section">
        <h2>Enter Payment Details</h2>
        <input id='orderinput' type="text" placeholder="Name" />
        <input id='orderinput' type="text" placeholder="Phone Number" />
        <input id='orderinput' type="text" placeholder="Card Number" />
        <input id='orderinput' type="text" placeholder="CVC" />
        <input id='orderinputdietary' type="text" placeholder="Please enter any dietary restrictions you have" />
      </div>
      <button className="confirm-pay-btn" onClick={handleConfirmAndPay}>
        Confirm and Pay
      </button>
    </div>
  );
};

export default CheckoutStep;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const FrenchCheckoutStep = ({ totalPrice, items }) => {
  const navigate = useNavigate();

  const handleConfirmAndPay = () => {
    navigate('/frenchorder-confirmation');
  };

  return (
    <div>
      <div className="ordertitle">
        <span id='current' >Entrées  </span>
        <span id='current'> ⎯⎯ Plateaux</span>
        <span id='current'>  ⎯⎯ Plat Principal</span>
        <span id='current'> ⎯⎯ Boissons</span>
        <span id='current'> ⎯⎯ Sortie de caisse</span>
      </div>

      <div className="selected-items">
        <h2>Articles sélectionnés</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>Quantité: {item.quantity}</span>
              <span>Prix: ${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-price">Prix total: ${totalPrice}</div>
      <div className="payment-section">
        <h2>Entrez les détails du paiement</h2>
        <input id='orderinput' type="text" placeholder="Nom" />
        <input id='orderinput' type="text" placeholder="Numéro de téléphone" />
        <input id='orderinput' type="text" placeholder="Numéro de la carte" />
        <input id='orderinput' type="text" placeholder="CVC" />
        <input id='orderinputdietary' type="text" placeholder="Veuillez indiquer vos éventuelles restrictions alimentaires" />
      </div>
      <button className="confirm-pay-btn" onClick={handleConfirmAndPay}>
      Confirmer et payer
      </button>
    </div>
  );
};

export default FrenchCheckoutStep;

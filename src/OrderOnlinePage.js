import React, { useState } from 'react';
import StartersStep from './StartersStep';
import PlattersStep from './PlattersStep';
import MainsStep from './MainsStep';
import DrinksStep from './DrinksStep';
import CheckoutStep from './CheckoutStep';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';
const OrderOnlinePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLanguageClick = (language) => {
    setActiveLanguage(language);
  };


  const [currentStep, setCurrentStep] = useState(1);

  const [items, setItems] = useState([
    { id: 1, name: 'Fried Calamari (🌶️)', category: 'Starters', price: 10, quantity: 0 },
    { id: 2, name: 'Cheesy Bites (🌶️)', category: 'Starters', price: 5, quantity: 0 },
    { id: 3, name: 'Tuna and crab cakes (🌶️🌶️)', category: 'Starters', price: 10, quantity: 0 },
    { id: 4, name: 'Gâteau piment (🌶️🌶️|🍃)', category: 'Starters', price: 5, quantity: 0 },
    { id: 5, name: 'Fish ball and seafood soup (🌶️🌶️🌶️)', category: 'Starters', price: 10, quantity: 0 },
    { id: 6, name: 'vegetable dumplings soup (🌶️|🍃)', category: 'Starters', price: 5, quantity: 0 },
    { id: 7, name: 'Farata and choice of 2 curries (🌶️|🍃)', category: 'Platters', price: 15, quantity: 0 },
    { id: 8, name: 'La daube poulet (🌶️🌶️)', category: 'Platters', price: 15, quantity: 0 },
    { id: 9, name: 'Fish masala curry (🌶️🌶️🌶️)', category: 'Platters', price: 15, quantity: 0 },
    { id: 10, name: 'Octopus stew (🌶️)', category: 'Platters', price: 15, quantity: 0 },
    { id: 11, name: 'Shrimp curry (🌶️🌶️)', category: 'Platters', price: 15, quantity: 0 },
    { id: 12, name: '7 curries platter (🌶️|🍃)', category: 'Platters', price: 15, quantity: 0 },
    { id: 13, name: 'Mine frite (🌶️)', category: 'Mains', price: 10, quantity: 0 },
    { id: 14, name: 'Riz frite (🌶️)', category: 'Mains', price: 8, quantity: 0 },
    { id: 15, name: 'Haalim with bread (🌶️🌶️🌶️|🍃)', category: 'Mains', price: 10, quantity: 0 },
    { id: 17, name: 'Dhall puri with curry (🌶️|🍃)', category: 'Mains', price: 8, quantity: 0 },
    { id: 18, name: 'Vermicelli noodles (🌶️)', category: 'Mains', price: 10, quantity: 0 },
    { id: 19, name: 'Pain kebab (🌶️🌶️)', category: 'Mains', price: 8, quantity: 0 },
    { id: 20, name: 'Panakon', category: 'Drinks', price: 3, quantity: 0 },
    { id: 21, name: 'Lemonade', category: 'Drinks', price: 4, quantity: 0 },
    { id: 22, name: 'Coconut water', category: 'Drinks', price: 3, quantity: 0 },
    { id: 23, name: 'Eski', category: 'Drinks', price: 4, quantity: 0 },
    { id: 24, name: 'Pearona', category: 'Drinks', price: 3, quantity: 0 },
    { id: 25, name: 'Fanta Passion', category: 'Drinks', price: 4, quantity: 0 },
  ]);

  const handleQuantityChange = (itemId, value) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: value };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleConfirmAndPay = () => {
    
  };

  const nextPage = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousPage = () => {
    setCurrentStep(currentStep - 1);
  };

  const starters = items.filter(item => item.category === 'Starters');
  const platters = items.filter(item => item.category === 'Platters');
  const mains = items.filter(item => item.category === 'Mains');
  const drinks = items.filter(item => item.category === 'Drinks');

  let nextButtonLabel = '';
  if (currentStep === 1) {
    nextButtonLabel = 'Platters';
  } else if (currentStep === 2) {
    nextButtonLabel = 'Mains';
  } else if (currentStep === 3) {
    nextButtonLabel = 'Drinks';
  } else if (currentStep === 4) {
    nextButtonLabel = 'Checkout';
  }

  let previousButtonLabel = '';
  if (currentStep === 2) {
    previousButtonLabel = 'Starters';
  } else if (currentStep === 3) {
    previousButtonLabel = 'Platters';
  } else if (currentStep === 4) {
    previousButtonLabel = 'Mains';
  } else if (currentStep === 5) {
    previousButtonLabel = 'Drinks';
  }

  return (
    <div className="orderonline">
       <nav className="navbar">
      <div className="logo">
        <Link id="logo" to="/">
          <img id="logoimg" src={LogoImg} alt="RestaurantLogo" />
        </Link>
      </div>

      <div className="links">
      <Link to="/">Home</Link>
        <div
          className="menu-dropdown"
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          <Link to="/menu">Menu</Link>
          {isMenuOpen && (
            <div className="dropdown-content">
              <Link to="/starters" onClick={closeMenu}>
                Starters
              </Link>
              <Link to="/platters" onClick={closeMenu}>
                Platters
              </Link>
              <Link to="/mains" onClick={closeMenu}>
                Mains
              </Link>
              <Link to="/drinks" onClick={closeMenu}>
                Drinks
              </Link>
            </div>
          )}
        </div>
        <Link to="/reviewspage">Reviews</Link>
        <Link id="homeorderonline" to="/orderonlinepage">
          Order Online
        </Link>
        <Link id="homeorderonline" to="/book">
          Book Now
        </Link>

        <div id="language-container">
          <Link
            id="languagestyle"
            to="/orderonlinepage"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchorderonlinepage"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>
    <div className="order-online-page">
     
      <h1 className="order-online-title">Order Online</h1>
      <div className="order-online-box">
        {currentStep === 1 && (
          <StartersStep
            starters={starters}
            handleQuantityChange={handleQuantityChange}
            items={items}
            totalPrice={calculateTotalPrice()}
          />
        )}

        {currentStep === 2 && (
          <PlattersStep
            platters={platters}
            handleQuantityChange={handleQuantityChange}
            items={items}
            totalPrice={calculateTotalPrice()}
          />
        )}

        {currentStep === 3 && (
          <MainsStep
            mains={mains}
            handleQuantityChange={handleQuantityChange}
            items={items}
            totalPrice={calculateTotalPrice()}
          />
        )}

        {currentStep === 4 && (
          <DrinksStep
            drinks={drinks}
            handleQuantityChange={handleQuantityChange}
            items={items}
            totalPrice={calculateTotalPrice()}
          />
        )}

        {currentStep === 5 && (
          <CheckoutStep
            totalPrice={calculateTotalPrice()}
            items={items.filter(item => item.quantity > 0)}
            handleConfirmAndPay={handleConfirmAndPay}
          />
        )}

        {currentStep > 1 && (
          <button onClick={previousPage} className="previous-step-button">
            {previousButtonLabel}
          </button>
        )}
        {currentStep < 5 && (
          <button onClick={nextPage} className="next-step-button">
            {nextButtonLabel}
          </button>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default OrderOnlinePage;

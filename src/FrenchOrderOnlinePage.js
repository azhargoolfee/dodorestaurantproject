import React, { useState } from 'react';
import FrenchStartersStep from './FrenchStartersStep';
import FrenchPlattersStep from './FrenchPlattersStep';
import FrenchMainsStep from './FrenchMainsStep';
import FrenchDrinksStep from './FrenchDrinksStep';
import FrenchCheckoutStep from './FrenchCheckoutStep';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import FrenchFooter from './FrenchFooter';
const FrenchOrderOnlinePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('FR');

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
    { id: 1, name: 'Calamars frits (🌶️)', category: 'Starters', price: 10, quantity: 0 },
    { id: 2, name: 'Bouchées au fromage (🌶️)', category: 'Starters', price: 5, quantity: 0 },
    { id: 3, name: 'Gâteaux au thon et au crabe (🌶️🌶️)', category: 'Starters', price: 10, quantity: 0 },
    { id: 4, name: 'Gâteau piment (🌶️🌶️|🍃)', category: 'Starters', price: 5, quantity: 0 },
    { id: 5, name: 'Soupe de boulettes de poisson et de fruits de mer (🌶️🌶️🌶️)', category: 'Starters', price: 10, quantity: 0 },
    { id: 6, name: 'Soupe de boulettes de légumes (🌶️|🍃)', category: 'Starters', price: 5, quantity: 0 },
    { id: 7, name: 'Farata et choix de 2 currys (🌶️|🍃)', category: 'Platters', price: 15, quantity: 0 },
    { id: 8, name: 'La daube poulet (🌶️🌶️)', category: 'Platters', price: 15, quantity: 0 },
    { id: 9, name: 'Curry de poisson masala(🌶️🌶️🌶️)', category: 'Platters', price: 15, quantity: 0 },
    { id: 10, name: 'Ragoût de poulpe (🌶️)', category: 'Platters', price: 15, quantity: 0 },
    { id: 11, name: 'Curry de crevettes (🌶️🌶️)', category: 'Platters', price: 15, quantity: 0 },
    { id: 12, name: 'Plateau de 7 curries (🌶️|🍃)', category: 'Platters', price: 15, quantity: 0 },
    { id: 13, name: 'Mine frite (🌶️)', category: 'Mains', price: 10, quantity: 0 },
    { id: 14, name: 'Riz frite (🌶️)', category: 'Mains', price: 8, quantity: 0 },
    { id: 15, name: 'Haalim avec du pain (🌶️🌶️🌶️|🍃)', category: 'Mains', price: 10, quantity: 0 },
    { id: 17, name: 'Dhall puri au curry  (🌶️|🍃)', category: 'Mains', price: 8, quantity: 0 },
    { id: 18, name: 'Nouilles de vermicelles (🌶️)', category: 'Mains', price: 10, quantity: 0 },
    { id: 19, name: 'Pain kebab (🌶️🌶️)', category: 'Mains', price: 8, quantity: 0 },
    { id: 20, name: 'Panakon', category: 'Drinks', price: 3, quantity: 0 },
    { id: 21, name: 'Limonade', category: 'Drinks', price: 4, quantity: 0 },
    { id: 22, name: 'Eau de coco', category: 'Drinks', price: 3, quantity: 0 },
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
    nextButtonLabel = 'Plateaux';
  } else if (currentStep === 2) {
    nextButtonLabel = 'Plat Principal';
  } else if (currentStep === 3) {
    nextButtonLabel = 'Boissons';
  } else if (currentStep === 4) {
    nextButtonLabel = 'Sortie de caisse';
  }

  let previousButtonLabel = '';
  if (currentStep === 2) {
    previousButtonLabel = 'Entrées';
  } else if (currentStep === 3) {
    previousButtonLabel = 'Plateaux';
  } else if (currentStep === 4) {
    previousButtonLabel = 'Plat Principal';
  } else if (currentStep === 5) {
    previousButtonLabel = 'Boissons';
  }

  return (
    <div className="orderonline">
       <nav className="navbar">
       <div className="logo">
                    <Link id="logo" to="/frenchhomepage">
                        <img id="logoimg" src={LogoImg} alt="RestaurantLogo" />
                    </Link>
                </div>

                <div className="links">
                    <Link to="/frenchhomepage">Accueil</Link>
                    <div
                        className="menu-dropdown"
                        onMouseEnter={toggleMenu}
                        onMouseLeave={toggleMenu}
                    >
                        <Link to="/frenchmenu">Menu</Link>
                        {isMenuOpen && (
                            <div className="dropdown-content">
                               <Link to="/frenchstarters" onClick={closeMenu}>
                                Entrées
                                </Link>
                                <Link to="/frenchplatters" onClick={closeMenu}>
                                Plateaux
                                </Link>
                                <Link to="/frenchmains" onClick={closeMenu}>
                                   Plat Principal
                                </Link>
                                <Link to="/frenchdrinks" onClick={closeMenu}>
                                Boissons
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/frenchreviewspage">Commentaires</Link>
                    <Link id="homeorderonline" to="/frenchorderonlinepage">
                        Commander en ligne
                    </Link>
                    <Link id="homeorderonline" to="/frenchbook">
                        Réserver une table
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
     
      <h1 className="order-online-title">Commander en ligne</h1>
      <div className="order-online-box">
        {currentStep === 1 && (
          <FrenchStartersStep
            starters={starters}
            handleQuantityChange={handleQuantityChange}
            items={items}
            totalPrice={calculateTotalPrice()}
          />
        )}

        {currentStep === 2 && (
          <FrenchPlattersStep
            platters={platters}
            handleQuantityChange={handleQuantityChange}
            items={items}
            totalPrice={calculateTotalPrice()}
          />
        )}

        {currentStep === 3 && (
          <FrenchMainsStep
            mains={mains}
            handleQuantityChange={handleQuantityChange}
            items={items}
            totalPrice={calculateTotalPrice()}
          />
        )}

        {currentStep === 4 && (
          <FrenchDrinksStep
            drinks={drinks}
            handleQuantityChange={handleQuantityChange}
            items={items}
            totalPrice={calculateTotalPrice()}
          />
        )}

        {currentStep === 5 && (
          <FrenchCheckoutStep
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
    <FrenchFooter/>
    </div>
  );
};

export default FrenchOrderOnlinePage;

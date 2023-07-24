import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';

const FAQPage = () => {

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

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: 'What type of cuisine does DODO Restaurant serve?',
      answer: 'DODO Restaurant specializes in offering a diverse menu of international cuisine, including Mediterranean, Asian, and American-inspired dishes. Our menu features a wide range of starters, platters, main courses, and beverages to cater to different tastes.',
    },
    
    {
        question: 'Can I make a reservation at DODO Restaurant?',
        answer: 'Absolutely! We encourage guests to make reservations to ensure a seamless dining experience. You can easily book a table through our website or by giving us a call. We recommend providing information such as the number of seats, any allergies you may have, the occasion, and the desired date and time for a tailored dining experience.',
    },
    {
        question: 'What are the opening hours of DODO Restaurant?',
      answer: 'Our restaurant is open from Monday to Friday, from 11:00 am to 11:00 pm. On Saturdays, we open at 10:00 am and close at 11:00 pm. On Sundays, we open at 10:00 am and close at 9:00 pm. Please note that these hours are subject to change during holidays and special occasions, so its best to check our website or contact us for any updates.',
    },
      
      {
        question: 'Can I order food online from DODO Restaurant?',
      answer: 'Absolutely! We provide convenient online ordering services for our customers. Simply visit our website, browse our menu, and select the items you wish to order. Once your order is placed, you can usually expect it to be ready for pickup within about 30 minutes.',},
      {
        question: 'Does DODO Restaurant accommodate dietary restrictions and allergies?',
      answer: 'Yes, we understand the importance of catering to different dietary needs. When making a reservation or ordering online, please specify any allergies or dietary restrictions you have. Our chefs will do their best to accommodate your needs and prepare a delicious meal that meets your requirements.',
    },
      
      {
        question: 'Does DODO Restaurant offer vegetarian or vegan options?',
        answer: 'Absolutely! We have a dedicated selection of vegetarian and vegan dishes on our menu. Our chefs have curated a variety of flavorful and satisfying options to cater to our vegetarian and vegan customers. Feel free to ask our staff for recommendations or check our menu for the available choices.',
     },
      {
        question: 'Does DODO Restaurant offer catering services for events or parties?',
        answer: 'Yes, we provide catering services for various events and parties. Whether youre hosting a corporate gathering, a birthday celebration, or a wedding reception, our team can work with you to create a customized menu that suits your preferences and dietary needs. Please contact us in advance to discuss the details and make arrangements.',
       },
      
      {
        question: ' Does DODO Restaurant have parking facilities available?',
      answer: ' While we dont have dedicated parking facilities, there are several parking options available near our location. There are paid street parking spots as well as public parking garages in close proximity to the restaurant. We recommend checking the available parking options in the vicinity before your visit.',
    },
      {
        question: 'Can I bring my own wine or alcoholic beverages to DODO Restaurant?',
      answer: 'Unfortunately, we do not allow customers to bring their own alcoholic beverages. However, we offer an extensive selection of wines, beers, cocktails, and other alcoholic and non-alcoholic beverages for you to enjoy during your visit. Our knowledgeable staff can recommend the perfect drink to complement your meal.',
    },
      
      {
        question: 'Does DODO Restaurant offer any special promotions or discounts?',
      answer: 'Yes, we occasionally run special promotions and offer discounts to our valued customers. These promotions may include seasonal menus, happy hour specials, or exclusive discounts for certain occasions. To stay updated on our latest offers, we recommend subscribing to our newsletter or following our social media channels for announcements and promotions.',
    },
  ];

  return (
    <div className="faqpagepage">
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
            to="/faqpage"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchfaqpage"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq-question">{item.question}</div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FAQPage;

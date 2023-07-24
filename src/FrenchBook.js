import React, { useState } from 'react';
import FrenchBookingConfirmation from './FrenchBookingConfirmation';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import FrenchFooter from './FrenchFooter';
const FrenchBook = () => {
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
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    allergies: '',
    seats: '1',
    occasion: 'Aucun',
    date: '',
    time: '',
    isSubmitted: false,
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingData({ ...bookingData, isSubmitted: true });
  }


  if (bookingData.isSubmitted) {
    return (
      <FrenchBookingConfirmation data={bookingData} />
    );
  } else {
    return (
      <div className="book">
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
            to="/book"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchbook"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>
      <div className="bookpage">
       
        <div className="bookheader">
          <h1>Réserver une table</h1>
        </div>

        <div className="container" id="contact-contactus">
          <div className="booking-container">
            <div className="booking-info">
              <div className="booking-title">
                <h2>Informations sur la réservation</h2>
              </div>
              <div className="booking-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">Prénom</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Entrez votre prénom" value={bookingData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Nom de famille</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Entrez votre nom de famille" value={bookingData.lastName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Adresse électronique</label>
                    <input type="email" className="form-control" id="email" placeholder="Entrez votre adresse électronique" value={bookingData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="allergies" className="form-label">Allergies</label>
                    <input type="text" className="form-control" id="allergies" placeholder="Entrez vos allergies" value={bookingData.allergies} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Sélectionnez le nombre de sièges</label>
                    <select className="form-select" id="seats" value={bookingData.seats} onChange={handleChange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="occasion" className="form-label">Choisir l'occasion</label>
                    <select className="form-select" id="occasion" value={bookingData.occasion} onChange={handleChange}>
                      <option value="None">Aucun</option>
                      <option value="Birthday">Anniversaire</option>
                      <option value="Wedding Anniversary">Anniversaire de mariage</option>
                      <option value="Date">Rendez-vous</option>
                    </select>
                  </div>

                  <div className="booking-calendar">
                    <div className="booking-title">
                      <h2>Sélectionner la date et l'heure</h2>
                    </div>
                    <div className="calendar-container">
                      <label htmlFor="date" className="form-label">Sélectionner la date</label>
                      <input type="date" className="form-control" id="date" value={bookingData.date} onChange={handleChange} required />
                    </div>
                    <div className="time-container">
                      <label htmlFor="time" className="form-label">Sélectionner l'heure</label>
                      <input type="time" className="form-control" id="time" value={bookingData.time} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary" id="bookBtn">Réserver</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrenchFooter/>
      </div>
    );
  }
}

export default FrenchBook;

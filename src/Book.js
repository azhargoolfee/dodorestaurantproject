import React, { useState } from 'react';
import Footer from './Footer';
import BookingConfirmation from './BookingConfirmation';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
const Book = () => {
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
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    allergies: '',
    seats: '1',
    occasion: 'None',
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
      <BookingConfirmation data={bookingData} />
    );
  } else {
    return (
      <div className="book">
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
          <h1>Book Now</h1>
        </div>

        <div className="container" id="contact-contactus">
          <div className="booking-container">
            <div className="booking-info">
              <div className="booking-title">
                <h2>Booking information</h2>
              </div>
              <div className="booking-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" value={bookingData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value={bookingData.lastName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email address" value={bookingData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="allergies" className="form-label">Allergies</label>
                    <input type="text" className="form-control" id="allergies" placeholder="Enter your allergies" value={bookingData.allergies} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Select number of seats</label>
                    <select className="form-select" id="seats" value={bookingData.seats} onChange={handleChange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="occasion" className="form-label">Select Occasion</label>
                    <select className="form-select" id="occasion" value={bookingData.occasion} onChange={handleChange}>
                      <option value="None">None</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Wedding Anniversary">Wedding Anniversary</option>
                      <option value="Date">Date</option>
                    </select>
                  </div>

                  <div className="booking-calendar">
                    <div className="booking-title">
                      <h2>Select Date and Time</h2>
                    </div>
                    <div className="calendar-container">
                      <label htmlFor="date" className="form-label">Select Date</label>
                      <input type="date" className="form-control" id="date" value={bookingData.date} onChange={handleChange} required />
                    </div>
                    <div className="time-container">
                      <label htmlFor="time" className="form-label">Select Time</label>
                      <input type="time" className="form-control" id="time" value={bookingData.time} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary" id="bookBtn">Book</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Book;

import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from './images/mylogo.svg';


const Error404 = () => {
  return (
    <div className="error-page">
      <div className="logo">
        <Link id="logo" to="/">
          <img id="logoimg" src={LogoImg} alt="RestaurantLogo" />
        </Link>
      </div>

      <h1>Error 404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" className="home-link">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Error404;

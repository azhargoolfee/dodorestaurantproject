import React, { useEffect } from 'react';
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Menu from "./Menu";
import background from './images/background.jpg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./Footer";

import Book from "./Book";
import Location from "./location";
import Aboutus from "./Aboutus";
import OrderOnlinePage from "./OrderOnlinePage";
import ReviewsPage from './ReviewsPage';

import Starters from './Starters';
import Platters from './Platters';
import Mains from './Mains';
import Drinks from './Drinks';
import BookingConfirmation from './BookingConfirmation';
import OrderConfirmation from './OrderConfirmation';
import FAQPage from './FAQPage';
import NewsletterPage from './NewsletterPage';
import Menuoftheday from './Menuoftheday';
import FrenchHomepage from './frenchhomepage';
import FrenchAboutus from './FrenchAboutus';
import FrenchMenu from './FrenchMenu';
import FrenchOrderOnlinePage from './FrenchOrderOnlinePage';
import FrenchBook from './FrenchBook';
import FrenchReviewsPage from './FrenchReviewsPage';
import FrenchLocation from './Frenchlocation';
import FrenchStarters from './FrenchStarters';
import FrenchPlatters from './FrenchPlatters';
import FrenchMains from './FrenchMains';
import FrenchDrinks from './FrenchDrinks';
import FrenchBookingConfirmation from './FrenchBookingConfirmation';
import FrenchOrderConfirmation from './FrenchOrderConfirmation';
import FrenchFAQPage from './FrenchFAQPage';
import FrenchNewsletterPage from './FrenchNewsletterPage';
import FrenchMenuoftheday from './FrenchMenuoftheday';
import Error404 from './Error404';
function App() {
  
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, []);
  return (
    <Router>
      <div className="App" >

        <div className="content">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/menu" exact element={<Menu />} />
            <Route path="/orderonlinepage" exact element={<OrderOnlinePage />} />
            <Route path="/book" exact element={<Book />} />
            <Route path="/reviewspage" exact element={<ReviewsPage />} />
            <Route path="/location" exact element={<Location />} />
            <Route path="/aboutus" exact element={<Aboutus />} />
           
            <Route path="/starters" exact element={<Starters/>} />
            <Route path="/platters" exact element={<Platters/>} />
            <Route path="/mains" exact element={<Mains/>} />
            <Route path="/drinks" exact element={<Drinks/>} />
            <Route path="/bookingconfirmation" exact element={<BookingConfirmation/>} />
            <Route path="/order-confirmation" exact element={<OrderConfirmation/>} />
            <Route path="/faqpage" exact element={<FAQPage/>} />
            <Route path="/newsletterpage" exact element={<NewsletterPage/>} />
            <Route path="/menuoftheday" exact element={<Menuoftheday/>} />
            <Route path="/frenchhomepage" exact element={<FrenchHomepage/>} />
            <Route path="/frenchaboutus" exact element={<FrenchAboutus/>} />

            <Route path="/frenchmenu" exact element={<FrenchMenu />} />
            <Route path="/frenchorderonlinepage" exact element={<FrenchOrderOnlinePage />} />
            <Route path="/frenchbook" exact element={<FrenchBook />} />
            <Route path="/frenchreviewspage" exact element={<FrenchReviewsPage />} />
            <Route path="/frenchlocation" exact element={<FrenchLocation />} />
            <Route path="/frenchstarters" exact element={<FrenchStarters/>} />
            <Route path="/frenchplatters" exact element={<FrenchPlatters/>} />
            <Route path="/frenchmains" exact element={<FrenchMains/>} />
            <Route path="/frenchdrinks" exact element={<FrenchDrinks/>} />
            <Route path="/frenchbookingconfirmation" exact element={<FrenchBookingConfirmation/>} />
            <Route path="/frenchorder-confirmation" exact element={<FrenchOrderConfirmation/>} />
            <Route path="/frenchfaqpage" exact element={<FrenchFAQPage/>} />
            <Route path="/frenchnewsletterpage" exact element={<FrenchNewsletterPage/>} />
            <Route path="/frenchmenuoftheday" exact element={<FrenchMenuoftheday/>} />
            

            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

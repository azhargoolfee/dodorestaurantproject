import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './images/mylogo.svg';
import Footer from './Footer';
const ReviewsPage = () => {
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

  const [reviews, setReviews] = useState([
    { id: 1, text: 'DODO Restaurant is the best!', likes: 10 },
    { id: 2, text: 'The owner is always there to welcome you! Would recommend.', likes: 5 },
    { id: 3, text: 'Awesome ambiance!', likes: 8 },
  ]);
  const [newReviewText, setNewReviewText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLikeReview = (reviewId) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, likes: review.likes + 1 };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  const handleAddReview = () => {
    const newReview = {
      id: reviews.length + 1,
      text: newReviewText,
      likes: 0,
    };
    setReviews([...reviews, newReview]);
    setNewReviewText('');
  };

  const filteredReviews = reviews.filter((review) =>
    review.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const sortedReviews = filteredReviews.sort((a, b) => b.likes - a.likes);

  return (
    <div className="reviewpage">
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
            to="/reviewspage"
            className={activeLanguage === 'EN' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('EN')}
          >
            EN 
          </Link>
          
          <Link
            id="languagestyle"
            to="/frenchreviewspage"
            className={activeLanguage === 'FR' ? 'active-language' : ''}
            onClick={() => handleLanguageClick('FR')}
          >
           FR
          </Link>
        </div>
      </div>
    </nav>

    <div className="reviews-page">
      <h1 className="reviews-title">Customer Reviews</h1>
      <div className="search-bar">
        <input
        id='menusearch'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a review..."
        />
      </div>
      <div className="reviews-list">
        {sortedReviews.map((review) => (
          <div key={review.id} className="review-item">
            <p>{review.text}</p>
            <div className="review-likes">
              <span>Likes: {review.likes}</span>
              <button onClick={() => handleLikeReview(review.id)}>Like</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-review">
        <h2>Write a Review</h2>
        <textarea
          value={newReviewText}
          onChange={(e) => setNewReviewText(e.target.value)}
          placeholder="Write your review..."
        ></textarea>
        <button onClick={handleAddReview}>Submit</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ReviewsPage;

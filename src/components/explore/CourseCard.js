import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/coursecard.css';
import { courseInCart } from '../../utils';

function CourseCard ({ addToCart, removeFromCart, item,  image, title, author, rating, reviews, price, originalPrice, isBestSeller }) {
  
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if(!courseInCart(item)) {
      console.log(courseInCart(item))
      console.log(item)
      addToCart(item);
      window.location.reload();
    }  else {
      console.log(courseInCart(item));
      removeFromCart(item);
      window.location.reload();
    }
  }
const handleCardImageClick = () => {
  navigate("/course-detail-page", {state: {...item}})
}

    return (
        <div className="coursecard">
          <div className="sm-card-image-dashboard" onClick={() => handleCardImageClick()}>
            {isBestSeller && <span className="sm-best-seller-badge">Best Sellers</span>}
            <img src={image} alt={title} />
          </div>
          <div className="sm-card-content">
            <h3 className="sm-card-title">{title}</h3>
            <div className="sm-author-info">
              <div className="sm-author-avatar"></div>
              <span className="sm-author-name">{author}</span>
            </div>
            <div className="sm-rating-info">
              <span className="sm-rating-star">★ {rating}</span>
              <span className="sm-reviews">({reviews} Reviews)</span>
            </div>
            <div className='sm-price-cart-div'>
              <div className="sm-price-info">
                <span className="sm-current-price">${price}</span>
                {originalPrice && <span className="sm-original-price">${originalPrice}</span>}
              </div>
              <button onClick={() => handleAddToCart()} className="sm-add-to-cart-btn">{courseInCart(item) ? "Remove Course" : "Add to cart"}</button>
            </div>
          </div>
        </div>
      );

};

export default CourseCard
import React from 'react';

import '../../styles/coursecard.css';

function CourseCard ({ image, title, author, rating, reviews, price, originalPrice, isBestSeller }) {

    return (
        <div className="coursecard">
          <div className="card-image-dashboard">
            {isBestSeller && <span className="best-seller-badge">Best Sellers</span>}
            <img src={image} alt={title} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <div className="author-info">
              <div className="author-avatar"></div>
              <span className="author-name">{author}</span>
            </div>
            <div className="rating-info">
              <span className="rating-star">★ {rating}</span>
              <span className="reviews">({reviews} Reviews)</span>
            </div>
            <div className='price-cart-div'>
              <div className="price-info">
                <span className="current-price">${price}</span>
                {originalPrice && <span className="original-price">${originalPrice}</span>}
              </div>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      );

};

export default CourseCard
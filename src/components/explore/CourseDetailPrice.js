import React from 'react';

import '../../styles/coursedetailprice.css';

function CourseDetailPrice (props) {

    return (
        <div className="coursedetailprice">
          <div className="price-section">
            <span className="current-price">$20</span>
            <span className="original-price">$30</span>
          </div>
          
          <div className="course-includes">
            <p>This course includes:</p>
            <ul>
              <li>5 hours on demand video</li>
              <li>15 articles</li>
              <li>4 downloadable resources</li>
              <li>Full lifetime access</li>
              <li>Access on mobile and tv</li>
            </ul>
          </div>
    
          <div className="actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
    
          <p className="guarantee">30 days money back guarantee</p>
        </div>
      );

};

export default CourseDetailPrice
import React, { useContext } from 'react';

import '../../styles/coursedetailprice.css';
import { FaCheck } from 'react-icons/fa6';
import { AppContext } from '../../App';
import { courseInCart } from '../../utils';

function CourseDetailPrice ({item}) {

  let {appState, addToCart, removeFromCart} = useContext(AppContext);


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


    return (
        <div className="coursedetailprice">
          <div className="price-section">
            <span className="current-price">$20</span>
            <span className="original-price">$30</span>
          </div>
          
          <div className="course-includes">
            <p>This course includes:</p>
            <ul>
              <li><FaCheck/>5 hours on demand video</li>
              <li><FaCheck/>15 articles</li>
              <li><FaCheck/>4 downloadable resources</li>
              <li><FaCheck/>Full lifetime access</li>
              <li><FaCheck/>Access on mobile and tv</li>
            </ul>
          </div>
    
          <div className="actions">
            <button onClick={() => handleAddToCart()} className="add-to-cart">{courseInCart(item) ? "Remove Course" : "Add to cart"}</button>

            <button className="buy-now">Buy Now</button>
          </div>
    
          <p className="guarantee">30 days money back guarantee</p>
        </div>
      );

};

export default CourseDetailPrice
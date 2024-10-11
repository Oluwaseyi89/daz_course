import React from 'react';

import '../../styles/reviewcard.css';

function ReviewCard (props) {

    return (
        <div className="reviewcard">
          <div className='image-rating-container'>
              <div className="user-avatar"></div> {/* Placeholder for user image */}
            
              <div className="user-details">
                <span className="user-name">Hanna Amalina</span>
                <div className="user-rating">
              {/* Placeholder for star ratings */}

              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="user-time">4 hours ago</span>

            
            </div>
            </div>
          </div>
         
          <div className="user-review">
            Learning these design skills was fascinating for an accountant and very easy to follow. 
            I have learnt a lot and will be designing on a regular basis going forward.
          </div>
        </div>
      );

};

export default ReviewCard
import React from 'react';

import '../../styles/studentrating.css';

function StudentRating (props) {

    const totalReviews = 12.6; // Total number of reviews
    const rating = 4.9; // Average rating
    const breakdown = [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ];

    return (
        <div className="studentrating">
          <div className="rating-summary">
            <span className="rating-number">{rating}</span>
            <span className="total-reviews">{totalReviews.toLocaleString()} reviews</span>
          </div>
    
          <div className="rating-breakdown">
            {breakdown.map((item) => (
              <div key={item.stars} className="rating-row">
                <span className="stars">
                  {Array(item.stars)
                    .fill('★')
                    .join('')}
                </span>
                <div className="progress-bar">
                  <div
                    className="filled-bar"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="percentage">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      );

};

export default StudentRating;
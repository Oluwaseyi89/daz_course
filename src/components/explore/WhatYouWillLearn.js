import React from 'react';

import '../../styles/whatyouwilllearn.css';
import { FaCheck } from 'react-icons/fa6';

function WhatYouWillLearn (props) {

    const learningPoints = [
        "Create mobile app designs from scratch",
        "Understand the differences between designing for iOS and Android",
        "Create wireframe designs for e-Commerce Project",
        "Create mockups using Figma",
        "Start a new career as a UI/UX designer"
      ];
    
      return (
        <div className="whatyouwilllearn">
          <h2>What you'll learn</h2>
          <div className="learning-grid">
            {learningPoints.map((point, index) => (
              <div key={index} className="learning-item">
                <span className="checkmark"><FaCheck/></span> {point}
              </div>
            ))}
          </div>
        </div>
      );

};

export default WhatYouWillLearn
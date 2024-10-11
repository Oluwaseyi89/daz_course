import React from 'react';

import '../../styles/courserequirements.css';
import { FaCircle } from 'react-icons/fa6';

function CourseRequirements (props) {

    const requirements = [
        "No pre-knowledge required - we’ll teach you everything you need to know",
        "A PC or Mac is required",
        "No software is required in advance of the course (all software used in the course is free or has a demo version)"
      ];
    
      return (
        <div className="courserequirements">
          <h2>Requirement</h2>
          <ul>
            {requirements.map((requirement, index) => (
              <li key={index} className="requirement-item">
                <span className="bullet"><FaCircle/></span> {requirement}
              </li>
            ))}
          </ul>
        </div>
      );

};

export default CourseRequirements
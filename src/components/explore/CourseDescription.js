import React, { useState } from 'react';

import '../../styles/coursedescription.css';

function CourseDescription (props) {

    const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

    return (
        <div className="coursedescription">
          <h2>Description</h2>
          <p>
            This Course is great for people with absolutely no design experience or experienced designers
            who want to get up to speed quickly with mobile app design. We’ll introduce you to the art of
            making beautiful apps. We’ll explore key UI and UX concepts that are essential to building good
            looking and easy to use apps that are loved by users.
          </p>
          {isExpanded && (
            <p>
              The course has a practical component that takes you step-by-step through the workflow of a
              professional app designer. From user flow diagrams to wireframing to mockups and prototypes.
              Students completing the course will have the knowledge to create beautiful and lovable apps
              that leave people with a smile on their face.
            </p>
          )}
          <button className="see-more" onClick={toggleDescription}>
            {isExpanded ? 'See less' : 'See more'}
          </button>
        </div>
      );

};

export default CourseDescription
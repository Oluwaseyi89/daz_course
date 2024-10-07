import React, { useEffect, useState } from 'react';

import '../../styles/successhabit.css';


function SuccessHabit ({ backgroundImages }) {

 
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  const backgroundStyle = {

    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
  };

    return (
        <div className="successhabit"     style={backgroundStyle}>
          <div className="overlay-content">
            <h1>Success is a habit</h1>
            <p>Build your learning routine in DazCourse. Find your best course here!</p>
            <button className="explore-button">Explore Now</button>
          </div>
        </div>
      );

};

export default SuccessHabit
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import '../../styles/successhabit.css';


function SuccessHabit ({ backgroundImages, textColors, pTextColors }) {

 
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [currentTxtColorIndex, setCurrentTxtColorIndex] = useState(0);
const [currentPTxtColorIndex, setCurrentPTxtColorIndex] = useState(0);

const navigate = useNavigate();

 



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      setCurrentTxtColorIndex((prevIndex) => (prevIndex + 1) % textColors.length);
      setCurrentPTxtColorIndex((prevIndex) => (prevIndex + 1) % pTextColors.length);


    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [backgroundImages.length, textColors.length, pTextColors.length]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',   
  };

  const textColorStyle = {
    color: `${textColors[currentTxtColorIndex]}`,
    transition: 'color 1s ease-in-out',
  };

  const pTextColorStyle = {
    color: `${pTextColors[currentPTxtColorIndex]}`,
    transition: 'color 1s ease-in-out',
  };

    return (
        <div className="successhabit"     style={backgroundStyle}>
          <div className="overlay-content">
            <h1 style={textColorStyle}>Success is a habit</h1>
            <p style={pTextColorStyle}>Build your learning routine in DazCourse. Find your best course here!</p>
            {window.location.pathname === "/explore" ? "" : <button onClick={() => navigate("/explore")} className="explore-button">Explore Now</button>}
          </div>
        </div>
      );

};

export default SuccessHabit
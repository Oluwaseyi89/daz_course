import React from 'react';

import '../../styles/coursedetailcard.css';
import { FaClockRotateLeft, FaGlobe, FaHeart, FaShareNodes, FaStar } from 'react-icons/fa6';

function CourseDetailCard ({ 
    image, 
    title, 
    rating, 
    reviews, 
    students, 
    author, 
    lastUpdate, 
    language, 
    subtitles 
  }) {

    return (
        <div className="coursedetailcard">
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
          <div className='card-detail-bottom'>
            <div className="card-content">
              <h2 className="card-title">{title}</h2>
            </div>
            <div className="card-actions">
            <i><FaHeart/></i>
            <i><FaShareNodes/></i>
            </div>
          </div>
          <div className="card-meta">
              <span className="card-rating"><span className='detail-star'><FaStar/></span> {rating} ({reviews} Reviews)</span>
              <span className="card-students">{students} students</span>
            </div>
            <p className="card-author">Created by <strong>{author}</strong></p>
            <div className="card-info">
              <span><FaClockRotateLeft/> </span>
              <span>Last update </span>
              <span>12/2020</span>
              <span><FaGlobe/> English</span>
              <span><FaGlobe/> English Frech</span>
            </div>
          
        </div>
      );

};

export default CourseDetailCard
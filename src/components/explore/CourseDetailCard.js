import React from 'react';

import '../../styles/coursedetailcard.css';

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
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <div className="card-meta">
              <span className="card-rating">⭐ {rating} ({reviews} Reviews)</span>
              <span className="card-students">{students} students</span>
            </div>
            <p className="card-author">Created by <strong>{author}</strong></p>
            <div className="card-info">
              <span>📅 Last update {lastUpdate}</span>
              <span>🗣️ {language}</span>
              <span>🌐 {subtitles}</span>
            </div>
          </div>
          <div className="card-actions">
            <button className="heart-button">❤️</button>
            <button className="share-button">🔗</button>
          </div>
        </div>
      );

};

export default CourseDetailCard
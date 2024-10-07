import React from 'react';

import '../../styles/courseprogresscard.css';

function CourseProgressCard ({ image, title, subtitle, totalCompleted, totalLessons }) {

    const progressPercentage = (totalCompleted / totalLessons) * 100;

    return (
        <div className="courseprogresscard">
        <div className="progress-card-image">
            <img src={image} alt={title} />
        </div>
        <div className="progress-card-content">
            <div className='progress-title-text'>
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{subtitle}</p>
            </div>
            <div className="progress-info">
                <span className="progress-text">
                    {totalCompleted}/{totalLessons} {totalLessons < 2 ? 'Lesson': 'Lessons'}
                </span>
                <div className="progress-bar">
                    <div
                    className="progress-bar-fill"
                    style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
        <div className="resume-button">
            <button>Resume</button>
        </div>
        </div>
    );

};

export default CourseProgressCard
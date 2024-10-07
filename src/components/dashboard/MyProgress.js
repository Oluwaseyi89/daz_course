import React from 'react';

import '../../styles/myprogress.css';

function MyProgress (props) {
 // Sample data representing progress for each day of the month
 const progressData = [
    [0, 0, 2, 3, 1, 0, 0],
    [3, 4, 1, 0, 2, 0, 0],
    [0, 0, 3, 2, 0, 0, 0],
    [1, 0, 4, 3, 4, 2, 0],
    [0, 2, 3, 1, 0, 0, 0],
  ];

  const getColorClass = (level) => {
    switch (level) {
      case 0:
        return 'level-0';
      case 1:
        return 'level-1';
      case 2:
        return 'level-2';
      case 3:
        return 'level-3';
      case 4:
        return 'level-4';
      default:
        return 'level-0';
    }
  };

  return (
    <div className="progress-calendar">
      <div className="progress-header">
        <h5>My Progress</h5>
        <span>October</span>
      </div>
      <div className="calendar">
        <div className="weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="weekday">
              {day}
            </div>
          ))}
        </div>
        {progressData.map((week, weekIndex) => (
          <div key={weekIndex} className="week">
            {week.map((day, dayIndex) => (
              <div key={dayIndex} className={`day ${getColorClass(day)}`}></div>
            ))}
          </div>
        ))}
      </div>
      <div className="legend">
        <span>Low</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div key={level} className={`legend-box ${getColorClass(level)}`}></div>
        ))}
        <span>Full</span>
      </div>
    </div>
  );

};

export default MyProgress



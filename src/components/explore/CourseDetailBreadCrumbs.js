import React from 'react';

import '../../styles/coursedetailbreadcrumbs.css';

function CourseDetailBreadCrumbs (props) {

    return (
        <div className="coursedetailbreadcrumbs">
          <div className='bread-crumb-btn'>
            <span className="separator"> &gt; </span>
            <span>Design</span>
          </div >
          <div className='bread-crumb-btn'>   
            <span className="separator"> &gt; </span>
            <span>User Experience Design</span>
          </div >
          <div className='bread-crumb-btn'>  
            <span className="separator"> &gt; </span>
            <span>Mobile App Design</span>
          </div >
        </div>
      );
};

export default CourseDetailBreadCrumbs
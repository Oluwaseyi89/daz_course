import React from 'react';

import '../../styles/coursedetailbreadcrumbs.css';

function CourseDetailBreadCrumbs (props) {

    return (
        <div className="coursedetailbreadcrumbs">
          <span className="separator"> &gt; </span>
          <span>Design</span>
          <span className="separator"> &gt; </span>
          <span>User Experience Design</span>
          <span className="separator"> &gt; </span>
          <span>Mobile App Design</span>
        </div>
      );
};

export default CourseDetailBreadCrumbs
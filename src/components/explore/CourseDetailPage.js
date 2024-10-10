import React from 'react';

import '../../styles/coursedetailpage.css';
import CourseDetailBreadCrumbs from './CourseDetailBreadCrumbs';
import CourseDetailCard from './CourseDetailCard';
import CourseDetailPrice from './CourseDetailPrice';
import WhatYouWillLearn from './WhatYouWillLearn';
import CourseRequirements from './CourseRequirements';
import CourseDescription from './CourseDescription';
import ReviewCard from './ReviewCard';
import { CoursesAccordion } from '../mylearning';

function CourseDetailPage (props) {

    return (
        <div className='coursedetailpage'>
            <div className='bread-crumbs-container'>
                <CourseDetailBreadCrumbs/>
            </div>
            <div className='course-detail-middle'>
                <div className='course-detail-left'>
                    <CourseDetailCard/>
                    <div className='course-emphasis'>
                        <WhatYouWillLearn/>
                        <CourseRequirements/>
                        <CourseDescription/>
                    </div>
                    <div className='course-detail-content'>
                        <h3>Content Course</h3>
                        <CoursesAccordion/>
                    </div>
                    <div className='course-detail-bottom'>
                        <div className='student-review-heading'>Student Reviews</div>
                        <ReviewCard/>
                    </div>
                </div>
                <div className='course-detail-right'>
                    <CourseDetailPrice/>
                </div>
            </div>
            <div style={{clear: "both"}}></div>
            

        </div>
    );

};

export default CourseDetailPage
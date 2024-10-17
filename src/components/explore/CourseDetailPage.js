import React, { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import '../../styles/coursedetailpage.css';
import CourseDetailBreadCrumbs from './CourseDetailBreadCrumbs';
import CourseDetailCard from './CourseDetailCard';
import CourseDetailPrice from './CourseDetailPrice';
import WhatYouWillLearn from './WhatYouWillLearn';
import CourseRequirements from './CourseRequirements';
import CourseDescription from './CourseDescription';
import ReviewCard from './ReviewCard';
import { CoursesAccordion } from '../mylearning';
import StudentRating from './StudentRating';
import { AppContext } from '../../App';

function CourseDetailPage (props) {

    const location = useLocation();

    const breadcrumbTitleRef = useRef();

    const {showMenu} = useContext(AppContext)

    

    useEffect(() => {
        const setBreadcrumbTitle = () => {
            if(showMenu) {
                breadcrumbTitleRef.current.style.position = "static";
            } else {
                breadcrumbTitleRef.current.style.position = "fixed";
            }
        }
        setBreadcrumbTitle();
        return () => {}
    },[showMenu]);

    const {
        courseImage, 
        courseTitle, 
        averageRating,
        numberOfReviews,
        instructor,
    
    } = location.state;

    const {...item} = location.state;

    return (
        <div className='coursedetailpage'>
            <div ref={breadcrumbTitleRef} className='bread-crumbs-container'>
                <CourseDetailBreadCrumbs/>
            </div>
            <div className='course-detail-middle'>
                <div className='course-detail-left'>
                    <CourseDetailCard 
                    image={courseImage}
                    title={courseTitle}
                    rating={averageRating}
                    reviews={numberOfReviews}
                    author={instructor}
                    />
                    <div className='course-emphasis'>
                        <WhatYouWillLearn/>
                        <CourseRequirements/>
                        <CourseDescription/>
                    </div>
                    <div className='course-detail-content'>
                        <h3 className='accordion-title'>Content Course</h3>
                        <CoursesAccordion/>
                    </div>
                    <div className='course-detail-bottom'>
                        <div className='student-review-heading'>Student Reviews</div>
                        <div className='student-rating-div'>
                            <StudentRating/>
                        </div>
                        <div className='review-card-div'>
                            <ReviewCard/>
                        </div>
                    </div>
                </div>
                <div className='course-detail-right'>
                    <CourseDetailPrice item={item}/>
                </div>
            </div>
            <div style={{clear: "both"}}></div>
            <div style={{height: "150px"}}></div>
            

        </div>
    );

};

export default CourseDetailPage
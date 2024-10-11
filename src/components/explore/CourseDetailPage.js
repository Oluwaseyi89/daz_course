import React from 'react';
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

function CourseDetailPage (props) {

    const location = useLocation();

    // {
    //     id: 12,
    //     courseTitle: "Java Testing",
    //     courseImage: "../assets/images/java_testing_training.webp",
    //     category: "Software Development",
    //     subCategory: "Code Testing",
    //     subCategoryBranch: "",
    //     currentLesson: "",
    //     lessons: [
    //         {
    //             lessonId: 1,
    //             lessonTitle: "",
    //             lessonDuration: "",
    //             isCompleted: false,
    //             completionDate: ""
    //         },
    //         {
    //             lessonId: 2,
    //             lessonTitle: "",
    //             lessonDuration: "",
    //             isCompleted: false,
    //             completionDate: ""
    //         },
    //         {
    //             lessonId: 3,
    //             lessonTitle: "",
    //             lessonDuration: "",
    //             isCompleted: false,
    //             completionDate: ""
    //         },
    //     ],
    //     instructor: "",
    //     instructorImage: "",
    //     coursePrice: 0,
    //     originalPrice: 0,
    //     averageRating: 4,
    //     numberOfReviews: 500,
    // }

    // image, 
    // title, 
    // rating, 
    // reviews, 
    // students, 
    // author, 
    // lastUpdate, 
    // language, 
    // subtitles 

    const {
        courseImage, 
        courseTitle, 
        averageRating,
        numberOfReviews,
        instructor,
    
    } = location.state;

    return (
        <div className='coursedetailpage'>
            <div className='bread-crumbs-container'>
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
                    <CourseDetailPrice/>
                </div>
            </div>
            <div style={{clear: "both"}}></div>
            <div style={{height: "150px"}}></div>
            

        </div>
    );

};

export default CourseDetailPage
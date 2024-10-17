import React, { useContext, useEffect, useRef } from 'react';

import '../../styles/instructorprofilepage.css';
import InstructorProfileCard from './InstructorProfileCard';
import { AppContext } from '../../App';
import CourseCard from './CourseCard';

function InstructorProfilePage (props) {

    const {appState, addToCart, removeFromCart, showMenu} = useContext(AppContext);

    const {courses} = appState;

    const instructorTitleRef = useRef();

    

    useEffect(() => {
        const setIntructorPageTitle = () => {
            if(showMenu) {
                instructorTitleRef.current.style.position = "static";
            } else {
                instructorTitleRef.current.style.position = "fixed";
            }
        }
        setIntructorPageTitle();
        return () => {}
    },[showMenu]);

    return (
        <div className='instructorprofilepage'>
            <div ref={instructorTitleRef} className='instructor-page-title'>Instructor Profile</div>
            <div className='instructor-card-container'>
                <InstructorProfileCard/>
            </div>
            <div className='instructor-page-bottom'>
                <div className='instructor-bottom-title'>Top Courses</div>
                <div className='instructor-top-courses'>
                    {
                        courses.slice(0, 3).map(course => {
                            return (
                                <CourseCard key={course.id} item={course} addToCart={addToCart} removeFromCart={removeFromCart}  image={course.courseImage} title={course.courseTitle} author={course.instructor} rating={course.averageRating} reviews={course.numberOfReviews} price={course.coursePrice} originalPrice={course.originalPrice} isBestSeller={true} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );

};

export default InstructorProfilePage
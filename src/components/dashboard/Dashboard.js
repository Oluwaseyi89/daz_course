import React, {useContext, useMemo, useState } from 'react';

import { AppContext } from '../../App';

import '../../styles/dashboard.css';
import MyProgress from './MyProgress';
import SuccessHabit from './SuccessHabit';
import { CourseProgressCard } from '../mylearning';
import { CourseCard } from '../explore';
import { compareAndFilterCourses } from '../../utils';
import { courses, changingBgImages, changingTextColors, changingParagraphTxtColors } from '../../states';


function Dashboard (props) {



    const {appState, addToCart, removeFromCart} = useContext(AppContext);        
      
  
    const {courseLearning} = appState;

    const [seeAll, setSeeAll] = useState(false);

    const filteredRecommendations = useMemo(() => {
        let filterResult = compareAndFilterCourses(courses, courseLearning, "courseTitle");
        return compareAndFilterCourses(filterResult, courseLearning, "subCategory");
      }, [courses, courseLearning]);

    const toggleSeeAll = () => setSeeAll(!seeAll);

    const coursesToShow = seeAll ? courseLearning : courseLearning.slice(0, 2);


    return (
        <div className='dashboard'>
           <SuccessHabit pTextColors={changingParagraphTxtColors} textColors={changingTextColors} backgroundImages={changingBgImages}/>
           <div className='dash-learning-title'>
                <span>Continue Learning</span>
                <span onClick={() => toggleSeeAll()}>{seeAll ? "See Less" : "See All"}</span>
            </div>
            <div className='dashboard-learning'>
                <div className='dash-learning-left'>
                    {coursesToShow.map(item => {
                        const totalCompleted = item.lessons.filter(lesson => lesson.isCompleted);
                        return (
                            <CourseProgressCard
                                key={item.courseTitle}
                                item={item}
                                image={item.courseImage}
                                title={item.courseTitle}
                                subtitle={item.currentLesson}
                                totalCompleted={totalCompleted.length}
                                totalLessons={item.lessons.length}
                            />
                        );
                    })}
                </div>
                <div className='dash-learning-right'>
                    <MyProgress/>
                </div>
            </div>
            <div style={{"clear": "both"}}></div>
            <div className='recommended-title'><span>Recommendations</span></div>
            <div className='recommended-courses'>
                {
                    filteredRecommendations.map(course => {
                        return (
                            <CourseCard key={course.id} item={course} addToCart={addToCart} removeFromCart={removeFromCart}  image={course.courseImage} title={course.courseTitle} author={course.instructor} rating={course.averageRating} reviews={course.numberOfReviews} price={course.coursePrice} originalPrice={course.originalPrice} isBestSeller={true} />
                        )
                    })

                }
            </div>
            <div style={{marginBottom: "100px"}}></div>
        </div>
    );

};

export default Dashboard
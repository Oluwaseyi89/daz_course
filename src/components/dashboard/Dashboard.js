import React, {useContext, useState } from 'react';

import { AppContext } from '../../App';

import '../../styles/dashboard.css';
import MyProgress from './MyProgress';
import SuccessHabit from './SuccessHabit';
import { CourseProgressCard } from '../mylearning';
import { CourseCard } from '../explore';
import { compareAndFilterCourses } from '../../utils';
import { courses, changingBgImages } from '../../states';




function Dashboard (props) {



    const {appState} = useContext(AppContext);        
      
  
    const {courseLearning} = appState;

    const [seeAll, setSeeAll] = useState(false);

    let filterResult = compareAndFilterCourses(courses, courseLearning, "courseTitle");
    // let filterCat = compareAndReturnSimilarArray(filterResult, courseLearning, "subCategory");
    let newCat = compareAndFilterCourses(filterResult, courseLearning, "subCategory")

    // console.log(filterResult);
    // console.log(filterCat)
    // console.log(newCat)

    const toggleSeeAll = () => {
        if (!seeAll) setSeeAll(true);
        else setSeeAll(false);
    }

    return (
        <div className='dashboard'>
            <SuccessHabit  backgroundImages={changingBgImages}/>
            <div className='dash-learning-title'>
                <span>Continue Learning</span>
                <span onClick={() => toggleSeeAll()}>{seeAll ? "See Less" : "See All"}</span>
            </div>
            <div className='dashboard-learning'>
                <div className='dash-learning-left'>
                    { seeAll ? (

                        courseLearning.map(item => {
                            const totalCompleted = item.lessons.filter(lesson => lesson.isCompleted);
                            return (
                                <CourseProgressCard key={item.courseTitle} image={item.courseImage} title={item.courseTitle} subtitle={item.currentLesson} totalCompleted={totalCompleted.length} totalLessons={item.lessons.length}/>
                            )
                        })
                    ): (
                        courseLearning.slice(0, 2).map(item => {
                            const totalCompleted = item.lessons.filter(lesson => lesson.isCompleted);
                            return (
                                <CourseProgressCard key={item.courseTitle} image={item.courseImage} title={item.courseTitle} subtitle={item.currentLesson} totalCompleted={totalCompleted.length} totalLessons={item.lessons.length}/>
                            )
                        })
                    )
                    }
                </div>
                <div className='dash-learning-right'>
                    <MyProgress/>
                </div>
            </div>
            <div style={{"clear": "both"}}></div>
            <div className='recommended-title'><span>Recommendations</span></div>
            <div className='recommended-courses'>
                {
                    newCat.map(course => {
                        return (
                            <CourseCard key={course.id} image={course.courseImage} title={course.courseTitle} author={course.instructor} rating={course.averageRating} reviews={course.numberOfReviews} price={course.coursePrice} originalPrice={course.originalPrice} isBestSeller={true} />
                        )
                    })

                }
            </div>
            <div style={{marginBottom: "100px"}}></div>
        </div>
    );

};

export default Dashboard
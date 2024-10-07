import React from 'react';

import '../../styles/mylearning.css';
import VideoPlayer from './VideoPlayer';
import CoursesAccordion from './CoursesAccordion';
import CourseProgressCard from './CourseProgressCard';

function MyLearning (props) {

    return (
        <div className='mylearning'>
            <VideoPlayer/>
            <CoursesAccordion/>
            <CourseProgressCard/>
        </div>
    );

};

export default MyLearning
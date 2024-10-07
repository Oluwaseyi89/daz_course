import React, { useState } from 'react';

import '../../styles/explore.css';
import { SuccessHabit } from '../dashboard';
import SearchInput from './SearchInput';
import { changingBgImages } from '../../states';
import CourseCard from './CourseCard';

function Explore (props) {

    const [searchResult, setSearchResult] = useState([]);

    console.log(searchResult)


    return (
        <div className='explore'>
           <SuccessHabit backgroundImages={changingBgImages}/>
           <SearchInput resultSetter={setSearchResult}/>
           {
            searchResult.length > 0 ? <div className='result-heading'>Your Result</div> : ""
           }
           <div className='search-result-container'>
                { 
                searchResult.length < 1 
                ?
                <div>
                    No results for your search parameter
                </div> :
                    
                    searchResult.map(course => {
                        return(
                            <CourseCard key={course.id} image={course.courseImage} title={course.courseTitle} author={course.instructor} rating={course.averageRating} reviews={course.numberOfReviews} price={course.coursePrice} originalPrice={course.originalPrice} isBestSeller={true} />
                        )
                    })
                }
           </div>
        </div>
    );

};

export default Explore
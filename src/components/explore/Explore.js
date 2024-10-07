import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa6';

import '../../styles/explore.css';
import { SuccessHabit } from '../dashboard';
import SearchInput from './SearchInput';
import { changingBgImages, changingTextColors, changingParagraphTxtColors } from '../../states';
import CourseCard from './CourseCard';
import WhatYouWillLearn from './WhatYouWillLearn';
import CourseRequirements from './CourseRequirements';

function Explore (props) {

    const [searchResult, setSearchResult] = useState([]);

    const [searchPerformed, setSearchPerformed] = useState(false);

    console.log(searchResult)


    return (
        <div className='explore'>
           <SuccessHabit pTextColors={changingParagraphTxtColors} textColors={changingTextColors} backgroundImages={changingBgImages}/>
           <SearchInput setSearchPerformed={setSearchPerformed} resultSetter={setSearchResult}/>
           {
            searchResult.length > 0 ? <div className='result-heading'><span>Your Results</span> <span className='cart-container'><span>0</span><span><FaCartPlus/></span></span></div> : ""
           }
           <div className='search-result-container'>
                { 
                searchResult.length < 1 
                ?( searchPerformed ? (

                    <div>
                    No results for your searched parameter
                </div>
                ) : ""
                )
                :
                    
                    searchResult.map(course => {
                        return(
                            <CourseCard key={course.id} image={course.courseImage} title={course.courseTitle} author={course.instructor} rating={course.averageRating} reviews={course.numberOfReviews} price={course.coursePrice} originalPrice={course.originalPrice} isBestSeller={true} />
                        )
                    })
                }
           </div>
           <WhatYouWillLearn/>
           <CourseRequirements/>
           <div style={{height: "80px"}}></div>
        </div>
    );

};

export default Explore
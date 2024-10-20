import React, { useState, useContext, useEffect, useMemo } from 'react';
import { FaCartPlus } from 'react-icons/fa6';

import '../../styles/explore.css';
import { SuccessHabit } from '../dashboard';
import SearchInput from './SearchInput';
import { changingBgImages, changingTextColors, changingParagraphTxtColors } from '../../states';
import CourseCard from './CourseCard';
import { AppContext } from '../../App';

function Explore() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const rawCachedSearch = localStorage.getItem("currentSearch") || '{}'; // Default to an empty object string
    let cachedSearch = {};

    try {
        cachedSearch = JSON.parse(rawCachedSearch);
    } catch (error) {
        console.error("Failed to parse cached search", error);
    }

    useEffect(() => {
        if (cachedSearch.results) {
            setSearchResult(cachedSearch.results);
        }
        return () => setSearchResult([]);
    }, []);

    const { appState, addToCart, removeFromCart } = useContext(AppContext);

    const renderedCourses = useMemo(() => {
        return searchResult.map(course => (
            <CourseCard 
                key={course.id} 
                item={course} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart}
                image={course.courseImage}
                title={course.courseTitle}
                author={course.instructor}
                rating={course.averageRating}
                reviews={course.numberOfReviews}
                price={course.coursePrice}
                originalPrice={course.originalPrice}
                isBestSeller={true}
            />
        ));
    }, [searchResult, addToCart, removeFromCart]);

    return (
        <div className='explore'>
            <SuccessHabit pTextColors={changingParagraphTxtColors} textColors={changingTextColors} backgroundImages={changingBgImages}/>
            <SearchInput setSearchPerformed={setSearchPerformed} resultSetter={setSearchResult} />

            {searchResult.length > 0 && (
                <div className='result-heading'>
                    <span>Your Results</span>
                    <span className='cart-container'>
                        <span>{appState.cartState.length}</span>
                        <span><FaCartPlus /></span>
                    </span>
                </div>
            )}

            <div className='search-result-container'>
                {searchResult.length > 0 ? (
                    renderedCourses
                ) : searchPerformed ? (
                    <div className='no-result'>
                        No results for your searched parameter
                    </div>
                ) : null}
            </div>

            <div style={{ height: "80px" }}></div>
        </div>
    );
}

export default Explore;





// import React, { useState, useContext, useEffect, useRef } from 'react';
// import { FaCartPlus } from 'react-icons/fa6';

// import '../../styles/explore.css';
// import { SuccessHabit } from '../dashboard';
// import SearchInput from './SearchInput';
// import { changingBgImages, changingTextColors, changingParagraphTxtColors } from '../../states';
// import CourseCard from './CourseCard';
// import { AppContext } from '../../App';

// function Explore (props) {

//     const [searchResult, setSearchResult] = useState([]);

//     const [searchPerformed, setSearchPerformed] = useState(false);

//     const rawCachedSearch = localStorage.getItem("currentSearch") || {};

//     const cachedSearch = rawCachedSearch ? JSON.parse(rawCachedSearch): {};
//     console.log(cachedSearch.results);

//     useEffect(() => {
//         setSearchResult(cachedSearch.results);
//         return () => {
//             setSearchResult([]);
//         }
//     },[]);

     

//     let {appState, addToCart, removeFromCart} = useContext(AppContext);  

   
   
//     return (
//         <div className='explore'>
//            <SuccessHabit pTextColors={changingParagraphTxtColors} textColors={changingTextColors} backgroundImages={changingBgImages}/>
//            <SearchInput setSearchPerformed={setSearchPerformed} resultSetter={setSearchResult}/>
//            {
//             searchResult.length > 0 ? <div className='result-heading'><span>Your Results</span> <span className='cart-container'><span >{appState.cartState.length}</span><span><FaCartPlus/></span></span></div> : ""
//            }
//            <div className='search-result-container'>
//                 { 
//                 searchResult.length < 1 
//                 ?( searchPerformed ? (

//                     <div className='no-result'>
//                     No results for your searched parameter
//                 </div>
//                 ) : ""
//                 )
//                 :
                    
//                     searchResult.map(course => {
//                         return(
//                                 <CourseCard key={course.id} item={course} addToCart={addToCart} removeFromCart={removeFromCart}  image={course.courseImage} title={course.courseTitle} author={course.instructor} rating={course.averageRating} reviews={course.numberOfReviews} price={course.coursePrice} originalPrice={course.originalPrice} isBestSeller={true} />
//                         )
//                     })
//                 }
//            </div>
//            <div style={{height: "80px"}}></div>
//         </div>
//     );

// };

// export default Explore
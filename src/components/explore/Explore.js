import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaCartPlus } from 'react-icons/fa6';

import '../../styles/explore.css';
import { SuccessHabit } from '../dashboard';
import SearchInput from './SearchInput';
import { changingBgImages, changingTextColors, changingParagraphTxtColors } from '../../states';
import CourseCard from './CourseCard';
// import WhatYouWillLearn from './WhatYouWillLearn';
// import CourseRequirements from './CourseRequirements';
// import CourseDescription from './CourseDescription';
// import CourseDetailBreadCrumbs from './CourseDetailBreadCrumbs';
import { AppContext } from '../../App';
// import ReviewCard from './ReviewCard';

function Explore (props) {

    const [searchResult, setSearchResult] = useState([]);

    const [searchPerformed, setSearchPerformed] = useState(false);

    let [itemVisible, setItemVisible] = useState(false);

    let resultsRef = useRef();

    const rawCachedSearch = localStorage.getItem("currentSearch") || {};

    const cachedSearch = rawCachedSearch ? JSON.parse(rawCachedSearch): {};
    console.log(cachedSearch.results);

    useEffect(() => {
        setSearchResult(cachedSearch.results);
        return () => {
            setSearchResult([]);
        }
    },[]);

    //   let options = {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.2
    //     };

    //     let obsCallBack = (entries) => {
    //        let [entry] = entries;
    //        if(entry.isIntersecting) console.log("intersecting")
    //        setItemVisible(entry.isIntersecting);
    //     }


   

    let {appState, addToCart, removeFromCart} = useContext(AppContext);

    let itemsContainer = document.getElementById('items-container');

    // useEffect(() => {
      
    //     // let currenItems = resultsRef.current;
        
    //     let observer = new IntersectionObserver(obsCallBack, options);

    //     if(itemsContainer) {
    //         console.log(itemsContainer)
    //         observer.observe(itemsContainer);
    //     }

    //     return () => {
    //         if(itemsContainer){
    //             observer.unobserve(itemsContainer)
    //         }  
    //     }
    // });

    

   
   
    return (
        <div className='explore'>
           <SuccessHabit pTextColors={changingParagraphTxtColors} textColors={changingTextColors} backgroundImages={changingBgImages}/>
           <SearchInput setSearchPerformed={setSearchPerformed} resultSetter={setSearchResult}/>
           {
            searchResult.length > 0 ? <div className='result-heading'><span>Your Results</span> <span className='cart-container'><span >{appState.cartState.length}</span><span><FaCartPlus/></span></span></div> : ""
           }
           <div ref={resultsRef} id='items-cotainer' className='search-result-container'>
                { 
                searchResult.length < 1 
                ?( searchPerformed ? (

                    <div className='no-result'>
                    No results for your searched parameter
                </div>
                ) : ""
                )
                :
                    
                    searchResult.map(course => {
                        return(
                                <CourseCard key={course.id} item={course} addToCart={addToCart} removeFromCart={removeFromCart}  image={course.courseImage} title={course.courseTitle} author={course.instructor} rating={course.averageRating} reviews={course.numberOfReviews} price={course.coursePrice} originalPrice={course.originalPrice} isBestSeller={true} />
                        )
                    })
                }
           </div>
           <div style={{height: "80px"}}></div>
        </div>
    );

};

export default Explore
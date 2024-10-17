import React, { useEffect, useRef, useState } from 'react';

import '../../styles/searchinput.css';
import { UseSearch } from '../../utils';


function SearchInput ({ setSearchPerformed, resultSetter }) {

  
  const [searchInput, setSearchInput] = useState("");

  const spanRef = useRef();
  const svgRef = useRef();
  let searchInputRef = useRef();
  let searchContainerRef = useRef();

  const handleMouseEnterSpan = () => {
    if (spanRef.current && svgRef.current) {
      svgRef.current.src = "../assets/images/lens_white_icon.svg";
    }
  }

  const handleMouseLeaveSpan = () => {
    if (spanRef.current && svgRef.current) {
      svgRef.current.src = "../assets/images/lens_icon.svg";
    }
  }

  const handleSearchInputChange = (e) => {
    setSearchPerformed(false);
    setSearchInput(e.target.value);
  }

  console.log(searchInput);

  const handleSearchOperation = () => {
    let searchResults = UseSearch(searchInput);
    setSearchPerformed(true);
    localStorage.setItem("currentSearch", JSON.stringify({"results": [...searchResults]}));
    resultSetter(searchResults);
  }

  useEffect(() => {
    let currentInput = searchInputRef?.current;
    let currentContainer = searchContainerRef?.current;

    let handleGlow = () => {
      if(currentInput && currentContainer) {
        currentContainer.style.boxShadow =  "0 0 6.25px 1.875px #48abe0";
      } 
    }

    let handleRemoveGlow = () => {
      if(currentInput && currentContainer) {
        currentContainer.style.boxShadow =  "none";
      } 
    }

    currentInput.addEventListener('focus', handleGlow, false);
    currentInput.addEventListener('blur', handleRemoveGlow, false);


    return () => {
      currentInput.removeEventListener('focus', handleGlow, false);
      currentInput.removeEventListener('blur', handleRemoveGlow, false);

    }
  });

  console.log("go")

  // if(searchInputRef)  console.log(searchInputRef.current.value);

  useEffect(() => {
    window.addEventListener('keypress', (e) => {
      if(e.key === "Enter") handleSearchOperation();
    })
  });

    return (
        <div ref={searchContainerRef} className="searchinput">
          <span onClick={() => handleSearchOperation()} ref={spanRef} className="search-icon" onMouseEnter={handleMouseEnterSpan} onMouseLeave={handleMouseLeaveSpan}>
            <img ref={svgRef} alt='lens' src='../assets/images/lens_icon.svg'/>
          </span>
          <input ref={searchInputRef} type="text" value={searchInput} onChange={(e) => handleSearchInputChange(e)} placeholder="Search for available courses" className="search-input" />
        </div>
      );

};

export default SearchInput;



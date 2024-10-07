import React, { useEffect, useRef, useState } from 'react';

import '../../styles/searchinput.css';
import { UseSearch } from '../../utils';


function SearchInput ({ setSearchPerformed, resultSetter }) {

  
  const [searchInput, setSearchInput] = useState("");

  const spanRef = useRef();
  const svgRef = useRef();

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
    resultSetter(searchResults);
  }

  useEffect(() => {
    window.addEventListener('keypress', (e) => {
      if(e.key === "Enter") handleSearchOperation();
    })
  });

    return (
        <div className="searchinput">
          <span onClick={() => handleSearchOperation()} ref={spanRef} className="search-icon" onMouseEnter={handleMouseEnterSpan} onMouseLeave={handleMouseLeaveSpan}>
            <img ref={svgRef} alt='lens' src='../assets/images/lens_icon.svg'/>
          </span>
          <input type="text" value={searchInput} onChange={(e) => handleSearchInputChange(e)} placeholder="Search for available courses" className="search-input" />
        </div>
      );

};

export default SearchInput;



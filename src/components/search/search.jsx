import React from "react";
import { FaSearch } from "react-icons/fa";
import './search.css'
import { useState } from "react";
import { Element } from "react-scroll";

function Search({ handleInput, searchValue, setSearchValue }) {
    const [inputActive, setInputActive] = useState(false);

    const handleInputActive = ()=> {
        setInputActive(true);
    }
    const handleInputNotActive = ()=> {
        setInputActive(false);
    }
    
   const handleSelectChange = (e) => {
       setSearchValue(e.target.value);
       handleInputActive();
    };
    

    return (
        <>
            <Element name="search" >
            <div className="search_container">
                <div className="dropdown_container">
                    <select value={ searchValue} onChange={handleSelectChange} className="search_dropdown">
                        <option value="popular">Popular</option>
                        <option value="discover">Discover</option>                       
                        <option value="trending">Trending</option>
                 </select>
                </div>
                <div className="input_container">
                      {!inputActive && (
            <FaSearch className="search_icon_search" />
          )}
                    <input type="text"
                        value={searchValue}
                        onChange={handleInput}
                        onFocus={handleInputActive}
                        onBlur={handleInputNotActive}
                        className="search"
                        placeholder="search" />              
                </div>
                </div>
         </Element>
        </>
    )
}

export default Search;
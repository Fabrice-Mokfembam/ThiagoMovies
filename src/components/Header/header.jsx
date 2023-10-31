import React from "react";
import "./header.css"
import logo from '../../assets/logo.png'
import { FaSearch } from 'react-icons/fa'
import { Link } from "react-scroll";

function Header() {

    const handleHeaderInput = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="header_container">
                <div className="logo_conatainer">
                    <img src={logo} alt="image" />
                </div>
                <Link to="search" smooth={true} duration={500}>
                <div className="header_search_container">
                         <FaSearch className='search_icon_header'/>
                        <input type="text" className="search_header" onClick={handleHeaderInput} readOnly={true} placeholder="search"/>              
                </div>                
                </Link>

          </div>
        </>
    )
}

export default Header;
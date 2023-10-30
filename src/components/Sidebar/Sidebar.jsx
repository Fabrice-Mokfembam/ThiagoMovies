// Navbar.js
import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import profile from '../../Assets/Images/th1.jpg' 
const items = [
  {
    navigations: '/',
    display: "Tasks"
  },
  {
    navigations: '/projects',
    display: "Projects"
  },
  {
    navigations: '/status',
    display: "Status"
  },
  {
    navigations: '/settings',
    display: "Settings"
  },
]

const Sidebar = () => {
  return (
    <div className='container'>
      <div className="imageContainer">
        <div className='image'>
          <img  src={profile} alt="image" />
        </div>
        <div className='name'>Jon Doe</div>
      </div>
      <div className='navlinks'>
        <ul className='navbar'>
          {
            items.map((item) => (
              <li className='li' key={item.navigations}>
                <NavLink  to={item.navigations} className='a'>{item.display}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
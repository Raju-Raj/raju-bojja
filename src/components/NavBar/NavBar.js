import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll/modules';

const NavBar = () => {
  const [showItem,setShowItem] = useState(false)
  return (
    <div className='nav-bar max-width' >
        <div className='logo'>
            <h2>JOYO</h2><span>Rooms</span>
        </div>
        <div id={showItem?"hidden":""}>
        <ul id={showItem?"show":""} className='listitems' >
            <Link spy={true} to="explore" smooth={true} activeClass="activeClass">
            <li>Explore</li>
            </Link>
            <Link spy={true} to="about" smooth={true} activeClass="activeClass">
            <li>About Us</li>
            </Link>
            <li>Cities<i className="fa-solid fa-angle-down"></i></li>
            <li className='last'>Call</li>
        </ul>
        {showItem?<i className="fa-solid fa-xmark" onClick={()=>setShowItem(!showItem)}></i>:<i className="fa-solid fa-bars" onClick={()=>setShowItem(!showItem)}></i>}
        </div>
    </div>
  )
}

export default NavBar
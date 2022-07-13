import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer max-width'>
        <div className='footerleft'>
             <div className='logo'>
               <h2>JOYO</h2><span>Rooms</span>
             </div>
             <p>© 2022 JOYO Rooms</p>
             <p>All rights reserved</p>
        </div>
        <ul className='listitems'>
            <li>Explore</li>
            <li>About Us</li>
            <li>Cities</li>
            <li>Call</li>
        </ul>
    </div>
  )
}

export default Footer
import React from 'react';
import ReUseImage from '../ReUseImage/ReUseImage';
import './Explore.css';
import image1 from '../../Images/image-one.jpg'
import image2 from '../../Images/image-two.jpg'

const Explore = () => {
  return (
    <div className='explore max-width'>
        <div className='exp-title'>
            <h2>Explore</h2>
            <p>From one-guest rooms to</p>
            <p>penthouses with pools and gardens</p>
        </div>

        <div className='exp-image'>
            <ReUseImage image={image1} matter={"Room With one king-size bed"} bt1={"35$"} bt2={28}/>
            <ReUseImage image={image2} matter={"Penthouse for 8 persons"} bt1={"203$"} bt2={438}/>
        </div>
    </div>
  )
}

export default Explore
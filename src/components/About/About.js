import React from 'react';
import './About.css';
import image1 from '../../Images/image-three.jpg'
import image2 from '../../Images/image-four.jpg'
import image3 from '../../Images/image-five.jpg'
import image4 from '../../Images/image-six.jpg'

const About = () => {
  return (
    <div className='about max-width'>
        <div className='abt-title'>
            <h2>About Us</h2>
            <p>Allow us to tell you a short story....</p>
        </div>

        <div className='images-top'>
        <div className='image-left'>
            <img src={image1} alt=''/>
            <div className='info'>
                <h3>Chapter I</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
            </div>
        </div>

        <div className='image-right'>
            <img src={image2} alt=''/>
            <div className='info'>
                <h3>Chapter II</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
            </div>
        </div>
        </div>

        <div className='images-bottom'>
        <div className='image-left'>
            <img src={image3} alt=''/>
            <div className='info'>
                <h3>Chapter I</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
            </div>
        </div>

        <div className='image-right'>
            <img src={image4} alt=''/>
            <div className='info'>
                <h3>Chapter II</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About
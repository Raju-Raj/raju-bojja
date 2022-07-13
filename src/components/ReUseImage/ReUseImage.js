import React from 'react';
import './ReUseImage.css';


const ReUseImage = ({image,matter,bt1,bt2}) => {
  return (
    <div className='reuse'>
        <div className='image'>
            <img src={image} alt=''/>

            <div className='info'>
                <div className='left'>
                    <p>{matter}</p>
                    <div className='buttons'>
                      <button>{bt1}</button>
                       <button>{bt2}M<sup>2</sup></button>
                    </div>
                </div>
                <div className='right'>
                    <button>Book!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReUseImage
import React,{useState} from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';

const Home = () => {
  const [data,setData]=useState({
    city:'',
    dates:'',
    guests:''
  })
  const {city,dates,guests}=data
  const changeHandle = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandle = (e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className='home'>
        
          <NavBar/>
    
        <div className='intro max-width'>
            <h1>Rethink your living & renting</h1>
            <p>Make your stay painless with us</p>
        </div>

        <div className='form-box max-width'>
            <form onSubmit={submitHandle}>
               <div className='form-boxes'>
                <input type="text" placeholder="CITY" name="city" value={city} onChange={changeHandle} required/>
                <p>Select your city</p>
               </div>
               <div className='form-boxes'>
                 <input type="text" placeholder="DATES" name="dates" value={dates} onChange={changeHandle} required/>
                 <p>Select your dates</p>
               </div>
               <div className='form-boxes'>
                  <input type="text" placeholder="GUESTS" name="guests" value={guests} onChange={changeHandle} required/>
                  <p>Add guests</p>
               </div>
               <button type='submit'><i className="fa-solid fa-magnifying-glass"></i> Search</button>
            </form>
        </div>

        <center>
            <div className='icon max-width'>
           <i className="fa-solid fa-angle-down"></i>
           </div>
        </center>
        
        
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="white" fillOpacity="1" d="M0,128L40,138.7C80,149,160,171,240,176C320,181,400,171,480,176C560,181,640,203,720,218.7C800,235,880,245,960,240C1040,235,1120,213,1200,202.7C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        </div>
    </div>
  )
}

export default Home
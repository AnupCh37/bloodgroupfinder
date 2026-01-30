import React from 'react'
import './pages.css'
import {FaSearch} from "react-icons/fa"
function Home() {
  return (
    <div className='min-h-[85vh]'>
      <h1 className=' hero-main' > Find <span
        className='text-[#ff4a4a]'>Blood Donors</span>  Near You</h1>
       <p className='hero-main-discription'>Connecting blood donors with those in urgent need.</p>
       <div className='search-section'>
     <form action="" className='hero-search'>
    <FaSearch className='search-icon' />
   <input className='input-form' type="text" name='search' placeholder='Search..' />
    <select className='search-location' name="location" id="location">
      <option value="ktm">Kathmandu</option>
      <option value="bkt">Bhaktapur</option>
      <option value="lit">Lalitpur</option>
    </select>
    <button className='search-button'> Search </button>
     </form>
     </div>
    </div>
  )
}

export default Home
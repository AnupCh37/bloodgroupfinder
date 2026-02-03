import React from 'react'
import './pages.css'
import {FaSearch} from "react-icons/fa"
import {MdPersonSearch} from "react-icons/md"
import {MdBloodtype} from "react-icons/md"
import {BiSolidDonateBlood} from "react-icons/bi"
import {FaQuestion} from "react-icons/fa6"
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
      <h1 className='work-title'>How it works?</h1>
     <div className='work-cards' >
       <div className='work-card'>
      <MdPersonSearch className='work-icon'/>
       <h2>Search Donor</h2> 
        </div>
       <div className='work-card'>
       <MdBloodtype className='work-icon' />
       <h2>Register as Donor</h2> 
       </div>
       <div className='work-card' >
        <BiSolidDonateBlood className='work-icon'/>
        <h2> Why Donate Blood?</h2>
       </div  >
       <div className='work-card'>
         <FaQuestion className='work-icon'/>
        <h2> Need Help?</h2>
       </div>
     </div>
    </div>
  )
}

export default Home
import React from 'react'
import './components.css'
import { FaPhoneAlt } from "react-icons/fa"
import {IoMail} from 'react-icons/io5'
import {FaLocationDot} from "react-icons/fa6"
import {FaFacebookSquare} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
function Footer() {
  return (
    <footer className='footer-div'>
      Contact Us: 
      <FaPhoneAlt className='footer-icon' />
      +977-1-12345677 
       <IoMail className='footer-icon' />
       bloodfinder108@gmail.com.np 
      <FaLocationDot className='footer-icon' />
      Kathmandu , Nepal
       <FaFacebookSquare className='footer-icon' />
       <FaInstagram className='footer-icon'/>
      </footer>
  )
}

export default Footer
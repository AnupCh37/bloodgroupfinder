import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
<>
<nav className='flex '>
<img className='h-[50px] w-[200px] m-3' src={logo} alt="logo"  />
<div className='flex  space-x-5 relative ml-auto'>
  <Link to="/">Home</Link>
  <Link to="/find-donor">Find Donor</Link>
  <Link to="/register-donor">Register Donor</Link>
  <Link to="/profile">Profile</Link>
  <Link to="/login">Login</Link>
</div>
   </nav>
</>
    );
}
export default Navbar;

import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './components.css'
function Navbar() {
    return (
        <>
            <nav className='flex'>
                <img className='h-[50px] w-auto m-3' src={logo} alt="logo" />
                <div className='nav-div '>
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link'  to="/find-donor">Find Donor</Link>
                    <Link className='nav-link' to="/register-donor">Register Donor</Link>
                    <Link className='nav-link' to="/profile">Profile</Link>
                    <Link className='nav-link' to="/login">Login</Link>
                </div>
            </nav>
        </>
    );
}
export default Navbar;

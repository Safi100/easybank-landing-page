import React from 'react'
import "./navbar.css"
import Logo from "../../Assets/logo.svg"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <a href='/' className="logo"><img src={Logo} alt="Easy Bank logo"/></a>
        <div className="list__container">
         <li className='list'>Home</li>
         <li className='list'>About</li>
         <li className='list'>Contact</li>
         <li className='list'>Blog</li>
         <li className='list'>Careers</li>
        </div>
        <button className='req_btn'>Request Invite</button>
      </div>
    </div>
  )
}

export default Navbar

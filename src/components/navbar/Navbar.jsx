import React, { useState } from 'react'
import "./navbar.css"
import Logo from "../../Assets/logo.svg"
import MobileNav from './MobileNav'
import Blur from '../blur/Blur'
import Close from "../../Assets/icon-close.svg"
import Open from "../../Assets/icon-hamburger.svg"
const Navbar = () => {
  const [open , setOpen] = useState(false)
  return (
    <div className='navbar'>
      {open && <Blur />}
      <div className="wrapper">
        {open && <MobileNav />}
        <a href='/' className="logo"><img src={Logo} alt="Easy Bank logo"/></a>
        <div className="list__container">
         <li className='list'>Home</li>
         <li className='list'>About</li>
         <li className='list'>Contact</li>
         <li className='list'>Blog</li>
         <li className='list'>Careers</li>
        </div>
        <button className='req_btn'>Request Invite</button>
        <div className="hamburger" onClick={()=> setOpen(!open)}>
          {(open === false) ? <img src={Open} alt="hamburger"/> : <img src={Close} alt="close icon"/>}
        </div>        
      </div>
    </div>
  )
}

export default Navbar

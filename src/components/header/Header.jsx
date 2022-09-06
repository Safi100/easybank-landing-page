import React from 'react'
import Mockups from "../../Assets/image-mockups.png"
import Desktop_bg from "../../Assets/bg-intro-desktop.svg"
import Mobile_bg from "../../Assets/bg-intro-mobile.svg"
import "./header.css"
const Header = () => {
  return (
    <div className='header'>
      <div className="wrapper">
        <div className="header__info">
          <h2 className='header__heading'>Next generation digital banking</h2>
          <p className='header__paragraph'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <button className='req_btn'>Request Invite</button>
        </div>
        <div className="hero__img">
          <div className="img__bg"></div>
          <img className='mockups' src={Mockups} alt="mockups" />
        </div>
      </div>
    </div>
  )
}

export default Header

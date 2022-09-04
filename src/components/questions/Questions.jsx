import React from 'react'
import Card from './Card'
import Api from "../../Assets/icon-api.svg"
import Budgeting from "../../Assets/icon-budgeting.svg"
import Online from "../../Assets/icon-online.svg"
import Onboarding from "../../Assets/icon-onboarding.svg"
import "./questions.css"
const Questions = () => {
  return (
    <div className='questions_container'>
      <div className="wrapper">
        <h2 className='questions__heading'>Why choose Easybank?</h2>
        <p className='questions__paragraph'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        <div className="benefits_container">
         <Card img={Online} header={`Online Banking`} paragraph={`Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.`}/>
         <Card img={Budgeting} header={`Simple Budgeting`} paragraph={`See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.`}/>
         <Card img={Onboarding} header={`Fast Onboarding`} paragraph={`We don’t do branches. Open your account in minutes online and start taking control of your finances right away.`}/>
         <Card img={Api} header={`Open API`} paragraph={`Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`}/>
       </div>
      </div>
    </div>
  )
}

export default Questions

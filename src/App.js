import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./app.css"
import Header from './components/header/Header'
import Questions from './components/questions/Questions'
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Header />   */}
      <Questions />
    </div>
  )
}

export default App

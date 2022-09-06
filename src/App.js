import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./app.css"
import Header from './components/header/Header'
import Questions from './components/questions/Questions'
import Article from './components/article/Article'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />  
      <Questions />
      <Article />
      <Footer />
    </div>
  )
}

export default App

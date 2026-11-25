import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import About from "./pages/About"



const App = () => {
  return (
    <div>
      <div className="nav">
        <div className="logo"><h2>DEMO SITE</h2></div>
        <div className="nav_links">
          <Link to={'/'} >Home</Link>
          <Link to={'About'}  >About</Link>
          <Link to={'Gallery'}  >Gallery</Link>
          <Link to={'Contact'}  >Contact Us</Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Gallery' element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App
// TYPE OF ROUTES 
// basic routes 
// nested route
// dynamic route 
// use navigate 
// 404 page 
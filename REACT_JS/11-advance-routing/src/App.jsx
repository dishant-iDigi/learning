import { Routes, Route } from "react-router-dom"
import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Course from "./pages/Course"
import Product from "./pages/Product"
import Men from "./pages/Men"
import Women from "./pages/Women"
import CourseCollection from './pages/CourseCollection'
import NotFound from "./pages/NotFound"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navbar2 from "./components/Navbar2"
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Navbar2/>
      <main className="">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />

          <Route path='/Product' element={<Product />} >
            <Route path='Men' element={<Men />} />
            <Route path='Women' element={<Women />} />
          </Route>

          <Route path='/Course' element={<Course />} />
          <Route path='/Course/:id' element={<CourseCollection />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default App
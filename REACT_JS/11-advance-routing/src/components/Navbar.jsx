import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="flex py-5 px-10 bg-[#B3B3B3] justify-between text-2xl font-medium shadow-xl/20">
            <div className=""><a href="/"><h1>DEMO SITE</h1></a></div>
            <div className="flex gap-30">
                <Link to={'/'} >Home</Link>
                <Link to={'/About'} >About</Link>
                <Link to={'/Product'} >Product</Link>
                <Link to={'/Course'} >Course</Link>
            </div>
        </div>
    )
}

export default Navbar

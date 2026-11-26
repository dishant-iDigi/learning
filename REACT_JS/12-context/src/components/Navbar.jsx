import React from 'react'
import { useContext, useState } from 'react'
import { themeDataContext } from '../context/ThemeContext'


const Navbar = () => {
    const [theme, setTheme] = useContext(themeDataContext);

    return (
        <div>
            <div className="logo">
                <h1>Context</h1>
                <h2>Your Current Theme is : {theme}</h2>
            </div>
        </div>
    )
}

export default Navbar

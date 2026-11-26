import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-slate-200">
            <button
                className='bg-amber-800 text-white px-4 py-2 font-medium uppercase rounded mx-5 my-5'
                onClick={() => {
                    navigate('/')
                }}
            >Return to home pg</button>
            <button
                className='bg-amber-800 text-white px-4 py-2 font-medium uppercase rounded mx-5 my-5'
                onClick={() => {
                    navigate(-1)
                }}
            >Back</button>
            <button
                className='bg-amber-800 text-white px-4 py-2 font-medium uppercase rounded mx-5 my-5'
                onClick={() => {
                    navigate(+1)
                }}
            >Next</button>
        </div>
    )
}

export default Navbar2

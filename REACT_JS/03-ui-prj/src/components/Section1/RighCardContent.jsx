import React from 'react'

const RighCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-14 w-14  text-2xl flex justify-center items-center text-xxl font-bold'>{props.id}</h2>
            <div>
                <p className='text-lg  leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam, sapiente repudiandae esse quasi eaque?</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color }} className=' text-white font-medium px-10 py-3 rounded-full '>{props.tag}</button>
                    <button className='text-xl text-white font-semibold  px-4 py-3 rounded-full text-bold'><i className="ri-arrow-right-up-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RighCardContent

import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3  p-6 flex flex-nowrap gap-8 overflow-x-auto rounded-4xl  '>
      {
        props.users.map(function (ele, idx) {
          return <div key={idx}>
            < RightCard img={ele.img} color={ele.color} tag={ele.tag} id={idx + 1} />
          </div>
        })
      }
    </div>
  )
}

export default RightContent

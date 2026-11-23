import React from 'react'
import RighCardContent from './RighCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 relative rounded-4xl overflow-hidden '>
      <img className='h-full w-full object-cover ' src={props.img} alt="" />
      <RighCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  )
}

export default RightCard

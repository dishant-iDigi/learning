import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Pg1Content = (props) => {
  return (
    <div className='py-4 px-18 h-[90vh]  flex justify-between item-center gap-4 '>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Pg1Content

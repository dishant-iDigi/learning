import React from 'react'
import Navbar from './Navbar.jsx';
import Pg1Content from './Pg1Content.jsx';

const Section1 = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <Pg1Content users={props.users} />
    </div>
  )
}

export default Section1

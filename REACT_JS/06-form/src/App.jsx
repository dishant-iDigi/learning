import React from 'react'
import { useState } from 'react';

// form 
// const App = () => {

//   const submitted= (e)=>{
//     e.preventDefault();
//     console.log("Form Submitted");
//   }

//   return (
//     <div>
//       <form action="" onSubmit={(e)=>{
//         submitted(e);
//       }}>
//         <input type="text" placeholder='Enter your name ' />
//         <button type='submit' > Submit </button>
//       </form>

//     </div>
//   )
// }

//2 way data binding 
const App = () => {

  const submitted = (e) => {
    e.preventDefault();
    console.log("Form submitted by ", title);
    newTitle("");
  }

  const [title, newTitle] = useState("");

  const changeT = (val) => {
    newTitle(val);
  }

  return (
    <div>
      <form action="" onSubmit={(e) => {
        submitted(e);
      }}>
        <input
          type="text"
          placeholder='Enter your name '
          value={title}
          onChange={(e) => {
            changeT(e.target.value);
          }}
        />
        <button type='submit' > Submit </button>
      </form>

    </div>
  )
}

export default App

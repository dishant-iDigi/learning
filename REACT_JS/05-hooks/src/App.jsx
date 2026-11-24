import React, { useState } from 'react'

const App = () => {

  // const [Num, setNum] = useState(0);
  // function increase() {
  //   setNum(Num + 1);
  // }
  // function decrease() {
  //   setNum(Num - 1);
  // }
  // function jumpBy5() {
  //   setNum(Num + 5);
  // }

  // const [object, setobject] = useState({ name: "Birju", age: 23 });

  // const btnClicked = () => {
  //   // method 1
  //   // const newobj = { ...object };
  //   // newobj.name = "raja";
  //   // setobject(newobj);

  //   // method 2

  //   // setobject(prev=>({...prev,age:20}));
  // }

  const [Num, setNum] = useState(10);
  const btnClicked = ()=> {

    // batch update in react 
    setNum(prev => (prev+1));
    setNum(prev => (prev+1));
    setNum(prev => (prev+1));
  }
 

  return (
    <div>
      {/* <div className="number">{Num}</div>
      <div className="plus btn" onClick={increase}><h2 > Increase</h2></div>
      <div className="minus btn " onClick={decrease}><h2>Decrease </h2></div>
      <div className="jump btn" onClick={jumpBy5}><h2> Jump by 5</h2></div> */}

      <h1>{Num}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default App
// HOOKS 
// USE STATE - Helps store and change values on the screen from one state to another (like increasing a counter or toggling a button).
// USE EFFECT - Runs automatic background tasks when the page loads or when data changes (like fetching API data or starting a timer , event listener).
// USE REF - Lets you directly touch an HTML element or store a value silently without refreshing the screen.
// USE REDUCER - Just like useState, but handles many complex state changes together in one organized place.
// USE CONTEXT - Shares data directly across any component in your app without passing props through every middle component.
// USE MEMO - Remembers the result of a slow calculation so React doesn't waste time calculating it over and over.
// USE CALLBACK - Remembers a function itself so React doesn't recreate it every time the screen updates. {avoid unnecessary re-render}
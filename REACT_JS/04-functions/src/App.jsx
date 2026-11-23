import React from 'react'

const App = () => {
  function  inputChanging(val) {
    console.log(val);
  };

 function scrolling(elem){
  console.log(elem);
 }
const pageScrolling = (dx, dy) => {
  console.log("X:", dx, "Y:", dy);
};
  return (
    //onMouseMove x y 
    <div 
    onWheel={function(ele){
      pageScrolling(ele.deltaX, ele.deltaY)
    }}
    >
      <div className='section' id="section1"></div>
      <div className='section' id="section2"></div>
      <div className='section' id="section3"></div>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import axios from "axios";

//  LOCAL STORAGE 
// const App = () => {
//   // localStorage.clear();
//   // localStorage.setItem("name","local storage");
//   const data = {
//     name: "chacha",
//     age :20 ,
//     sec : 14,
//   }
//   // localStorage.setItem("data" ,JSON.stringify(data)); // object to string 
//   // const receivedData = JSON.parse(localStorage.getItem('data')); // string to object 
//   // console.log(receivedData);


//   return (
//     <div>

//     </div>
//   )
// }

// api calls 
// const App = () => {

//   // USING FETCH 
//   // const getData = async () => {
//   // const response = await fetch('https://jsonplaceholder.typicode.com/comments');
//   // const data = await response.json(); // promise to json 
//   // console.log(data);
//   // }

//   // USING AXIOS 
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

//     setData(response.data);
//     console.log(response.data);
//   }

//   return (
//     <div>
//       <button onClick={getData}>Get Data </button>
//       <div>
//         {data.map((ele, idx) => {
//           return <div key={idx}>
//             <h2>{ele.title}</h2>
//             <p>{ele.body}</p>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }

// USE EFFECT 
const App = () => {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  // used for doing micro task  in side stack -> side queue -->micro task 
  useEffect(function () {
    console.log("Use Effect is running .. ");
  }, [num2])// dependency array it depends on what is inside the array ,   
  // it wil run once here as the array is empty but if we add num it will change when the num will change
  return (
    <div>
      <h2>The number is : {num}</h2>
      <h2>The number is : {num2}</h2>
      <button
        onClick={function () {
          setNum(num + 1);
        }}
        onDoubleClick={function () {
          setNum2(num2 + 10);
        }}
      >Number + 1</button>

    </div>
  )
}

export default App

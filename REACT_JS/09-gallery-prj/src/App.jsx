import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {

  const [data, setData] = useState([]);
  const [num, setNum] = useState(2);

  const getData = async () => {
    const response = await axios(`https://picsum.photos/v2/list?page=${num}&limit=10`)
    setData(response.data);
    // console.log(response.data);
  }
  useEffect(function () {
    getData();
  }, [num])

  let printUserData = <h1 className='text-xl font-medium text-green-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '> Loading... </h1>

  if (data.length > 0) {
    printUserData = data.map((ele, idx) => {

      return <div key={idx} >
        <a href={ele.url} target='_blank'>
          <img className='h-40 w-40 object-cover rounded-2xl' src={ele.download_url} alt="" />
          <h2 className='font-medium'>{ele.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white flex flex-col '>

      {/* <button className='bg-green-600 px-2 py-2 m-5 rounded active:scale-95 '
        onClick={function () {
          getData();
        }}
      >get Data</button> */}

      
      <div className='flex flex-wrap gap-4 p-5 '>
        {printUserData}
      </div>
      <div className='flex justify-center text-center gap-4 p-4 mt-auto '>
        <button className='bg-amber-400 text-black px-4  text-xl font-medium rounded active:scale-95'
          onClick={() => {
            if (num > 1) {
              setData([])
              setNum(num - 1);
              console.log("prev btn Click ");
            }
          }}
        >Prev</button>
        <h2 className='font-medium uppercase text-center py-2 px-4  '>Page Num : {num}</h2>
        <button className='bg-amber-400 text-black px-4  text-xl font-medium rounded active:scale-95'
          onClick={() => {
            setData([])
            setNum(num + 1);
            console.log("next btn Click ");

          }}
        >Next</button>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);



  const submitHandler = (event) => {
    event.preventDefault();
    const copyTask = [...task];// copying to prevent the old data from removing
    copyTask.push({ title, details });// ading new data to alredy existing one
    setTask(copyTask);// finaly filling the task with old+new added data


    console.log(task);
    setTitle("");
    setDetails("");
  }

  const deleteNote=(idx)=>{
    const copyTask = [...task];
    // console.log(copyTask[idx]);
    copyTask.splice(idx,1);
    setTask(copyTask);
  }


  return (
    <div className='lg:flex'>
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
        className='flex items-start flex-col lg:w-1/2 my-4 mx-6 gap-5 pt-7'>
        <h1 className="card_heading text-3xl font-bold ">Add Notes</h1>
        <input
          className='bg-white text-xl px-10 py-4 rounded border-3   w-full font-medium'
          type="text"
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className='bg-white text-xl px-10 py-4 rounded border-3  w-full h-40 font-medium'
          type="text"
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className='bg-amber-200 text-black text-2xl rounded-2xl py-4 px-6 border-3 w-full  font-medium active:scale-98'> Add Note</button>
      </form>
      <div className="card lg:w-1/2 p-10 border-t-4  lg:border-l-4 lg:border-t-0 ">
        <div className="card_heading text-3xl font-bold "><h1>Recent Notes</h1></div>
        <div className='flex flex-wrap gap-5 mt-5'>
          {task.map((ele, idx) => {
            return <div
              key={idx} className=" flex flex-col justify-between border-4  h-52 w-40  rounded-2xl p-4 bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/10/23/15/47/paper-1763262_640.png')]">
              <div className='overflow-y-auto wrap-break-word'>
                <h3 className='font-bold  uppercase  p-2 '>{ele.title}</h3>
                <p className=' p-2 mt-2  ' >{ele.details}</p>
              </div>
              <button className='w-full bg-red-500 text-white rounded uppercase font-bold  active:scale-95 outline-0'
              onClick={()=>{
                deleteNote(idx);
              }}
              >Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

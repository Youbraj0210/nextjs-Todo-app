"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandle = () => {
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }

  const deltask = (i)=>{
    const cpymain = [...mainTask];
    cpymain.splice(i,1);
    setmainTask(cpymain);
  }

  let render = <h2 style={{padding: 1 + 'rem'}}>no task availabe</h2>

  if (mainTask.length > 0) {
    render = mainTask.map((t, i) => {
      return <li key={i}>
        <div className='task'>
          <h5>{t.title}</h5>
          <h6>{t.desc}</h6>
        <button onClick={()=>{
          deltask(i)
        }} className='del'>delete</button>
        </div>
      </li>
    })
  }

  return (
    <>
      <h1>Todo App</h1>
      <div className="inputs">
        <input type="text" placeholder='Enter the title' value={title} onChange={(e) => {
          settitle(e.target.value);
        }} />
        <input type="text" placeholder='Enter the description' value={desc} onChange={(e) => {
          setdesc(e.target.value);
        }} />
        <button onClick={submitHandle} className='addtask'>Add Task</button>
      </div>
      <hr />
      <div className="tasks">
        <ul>
          {render}
        </ul>
      </div>


    </>
  )
}

export default page
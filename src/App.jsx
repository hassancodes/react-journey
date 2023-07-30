import "./App.css"
import {Planets} from "./planets"
import {useState,useEffect} from "react"


// learning states


function App(){

 

  const [password,setPassword]=useState("");
  const [passvis,setPassvis] = useState(true);
  var [colorr, setColor]=useState("black");

  // counter states
  var [counter,setInc]=useState(0);

  const increase=()=>{
    setInc(counter=counter+1);
  }

  const decrease=()=>{
    setInc(counter=counter-1);
  }

  const settozero=()=>{
    setInc(counter=0);
  }







  const writePass = (event)=>{
   setPassword(event.target.value);
  }

  const passvisibilty =()=>{
    setPassvis(!passvis)
    setPassword()
  }

  const colorChange=()=>{

    const colorlist = ["red", "black","yellow","orange", "pink"]
    // setColor(colorr==="black" ? "red" : "black");
    const randomItem = colorlist[Math.floor(Math.random() * colorlist.length)];
    setColor(colorr=randomItem);

  }


  // states for the to do list start here
  const [newTask,setNewTask]=useState([]);
  const [getTask,setGetTask]=useState("");


  // this function will get the 
  const detectTask = (event)=>{
    setGetTask(event.target.value);
  }

  const addTaskFunction=()=>{
    const task ={
      id: newTask.length===0 ? 1 : newTask[newTask.length-1].id + 1,
      taskName: getTask,
      completed:false
    }
    const rawlist = [...newTask,task];
    setNewTask(rawlist);
  }

  const deleteTask=(delTask)=>{
    const updatedArr=newTask.filter((task)=>{
      return task.id !==delTask
    })
    setNewTask(updatedArr);
  }

  const taskDone=(id)=>{
    setNewTask(
    newTask.map((task)=>{
      if(task.id===id){
        return {...task,completed:true};
      }else{
        return task;
      }
    }))

  }




    // states for the to do list end here
  
  return(
    <div className="main">

      {/* this implements show and hide functionality */}
      <h4>Learning how to show/hide elements</h4>
      <div>
      {passvis===true &&  <input type="text" onChange={writePass}/>}
      <button onClick={passvisibilty}>show/hide</button>
      <br/>
      {password}
      </div>



      <br />
      <hr />
      <br />

      <h4>Color Changing text component</h4>

      <div>
        <button onClick={colorChange}>ChangeColor</button>
        <ColorComponent color={colorr} style={colorr}/>
      </div>

      <br />
      <hr />
      <br />
      <h3>React Counter</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={settozero}>Set To Zero</button>
      <h4>{counter}</h4>


      <br />
      <hr />
      <br />

      <h3>To Do list functionality</h3>
      <div className="addTask">
        <input onChange={detectTask} />
        {/* <p>{getTask}</p> */}
        <button onClick={addTaskFunction}>Add New Task</button>
      </div>
      <div className="todo-main">
      {newTask.map((value)=>{
          return (
          <div className="todo--child" style={{backgroundColor : value.completed ? "green" : "yellow"}}>
            <h3>{value.taskName}</h3>
            {/* when a function have a parameter we have to use an empty function that calls the actual function */}
            <button onClick={()=>taskDone(value.id)}>✅</button>
            <button onClick={()=>deleteTask(value.id)}>delete</button>
          </div>)

        })}
      </div>

    </div>
  );
}



const ColorComponent=(props)=>{
  return <p style={{color:props.style}}>This is a {props.color} text</p>
}

const SpaceComponent=()=>{
  
}



export default App

































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

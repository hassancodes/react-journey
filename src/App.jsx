import "./App.css"
import {Planets} from "./planets"
import {useState} from "react"


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

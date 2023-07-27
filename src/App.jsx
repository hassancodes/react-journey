import "./App.css"
import {Planets} from "./planets"
import {useState} from "react"


// learning states
function App(){
  const [password,setPassword]=useState("");
  const [passvis,setPassvis] = useState(true);

  const writePass = (event)=>{
   setPassword(event.target.value);
  }

  const passvisibilty =()=>{
    setPassvis(!passvis)
    setPassword()
    console.log(passvis)
  }
  return(
    <div className="main">
      {passvis===true &&  <input type="text" onChange={writePass}/>}
      <button onClick={passvisibilty}>show/hide</button>
      <br/>
      {password}
    </div>
  );
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

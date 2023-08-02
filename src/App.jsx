import "./App.css";
import { Planets } from "./planets";
import {Home,Contact,About} from "./Pages/Home";
import {Profile} from "./Pages/profile";
import { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import {createContext} from "react";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";

// learning states

export const AppContext = createContext();

function App() {
  const client= new QueryClient();
  const [password, setPassword] = useState("");
  const [passvis, setPassvis] = useState(true);
  var [colorr, setColor] = useState("black");
  const [userName,setUserName] = useState("");
  

  // counter states
  var [counter, setInc] = useState(0);

  const increase = () => {
    setInc((counter = counter + 1));
  };

  const decrease = () => {
    setInc((counter = counter - 1));
  };

  const settozero = () => {
    setInc((counter = 0));
  };

  const writePass = (event) => {
    setPassword(event.target.value);
  };

  const passvisibilty = () => {
    setPassvis(!passvis);
    setPassword();
  };

  const colorChange = () => {
    const colorlist = ["red", "black", "yellow", "orange", "pink"];
    // setColor(colorr==="black" ? "red" : "black");
    const randomItem = colorlist[Math.floor(Math.random() * colorlist.length)];
    setColor((colorr = randomItem));
  };

  // states for the to do list start here
  const [newTask, setNewTask] = useState([]);
  const [getTask, setGetTask] = useState("");

  // this function will get the
  const detectTask = (event) => {
    setGetTask(event.target.value);
  };

  const addTaskFunction = () => {
    const task = {
      id: newTask.length === 0 ? 1 : newTask[newTask.length - 1].id + 1,
      taskName: getTask,
      completed: false,
    };
    const rawlist = [...newTask, task];
    setNewTask(rawlist);
  };

  const deleteTask = (delTask) => {
    const updatedArr = newTask.filter((task) => {
      return task.id !== delTask;
    });
    setNewTask(updatedArr);
  };

  const taskDone = (id) => {
    setNewTask(
      newTask.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  // states for the to do list end here =======================================
  // Fetching the api starts here =========================================
  const [fact,setFact] = useState("");
  const generateFact=()=>{
    fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
      setFact(data.fact);
      console.log(data);


    });

  } 
  // Fetching the api end here =========================================



  return (
    <div className="main">
      {/* this implements show and hide functionality */}
      <h4>Learning how to show/hide elements</h4>
      <div>
        {passvis === true && <input type="text" onChange={writePass} />}
        <button onClick={passvisibilty}>show/hide</button>
        <br />
        {password}
      </div>

      <SpaceComponent />

      <h4>Color Changing text component</h4>

      <div>
        <button onClick={colorChange}>ChangeColor</button>
        <ColorComponent color={colorr} style={colorr} />
      </div>

      <br />
      <hr />
      <br />
      <h3>React Counter</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={settozero}>Set To Zero</button>
      <h4>{counter}</h4>

      <SpaceComponent />

      <h3>To Do list functionality</h3>
      <div className="addTask">
        <input onChange={detectTask} />
        {/* <p>{getTask}</p> */}
        <button onClick={addTaskFunction}>Add New Task</button>
      </div>
      <div className="todo-main">
        {newTask.map((value) => {
          return (
            <div
              className="todo--child"
              style={{ backgroundColor: value.completed ? "green" : "yellow" }}
            >
              <h3>{value.taskName}</h3>
              {/* when a function have a parameter we have to use an empty function that calls the actual function */}
              <button onClick={() => taskDone(value.id)}>✅</button>
              <button onClick={() => deleteTask(value.id)}>delete</button>
            </div>
          );
        })}
      </div>

      <SpaceComponent />

      <div>
        <h3>Learning how to fetch in React</h3>
        <div>
          <button onClick={generateFact}>Generate a Cat Fact</button>
          <br />
          {fact}
        </div>
      </div>

{/* learning Routes in React */}
      <SpaceComponent />
      <div>
        <h3>Learning React Routers</h3>

        <div>
          <QueryClientProvider client={client}>
          <AppContext.Provider value={{userName,setUserName}}>
          <Router>
            <h3>NavBar</h3>
            <Link to={"/home"}>  Home  </Link>
            <Link to={"/contact"}>  Contact  </Link>
            <Link to={"/about"}>  About  </Link>
            <Link to={"/profile"}> Profile</Link>
            <Routes>
              {/* home and profile will share the username but only profile will be edit it */}
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
          </AppContext.Provider>
          </QueryClientProvider>
        </div>
      </div>


      <SpaceComponent />
      {/* Learning state management in React */}


      
    </div>

    
  );
}

const ColorComponent = (props) => {
  return <p style={{ color: props.style }}>This is a {props.color} text</p>;
};

const SpaceComponent = () => {
  return (
    <><br /><br /><hr /></>
  );
};

export default App;

import {useContext} from "react";
import { AppContext } from "../App";
import {useState} from "react";



    
export const Profile=()=>{

    const {userName,setUserName} = useContext(AppContext);
    const [newUserName,setNewUserName]= useState("");

    const updateFunction=()=>{
        setUserName(newUserName);
    }
    return (<div>
        <h3>This is profile. user :{userName}</h3>
        <input onChange={(event)=>{setNewUserName(event.target.value);}}type="text" />
        <button onClick={updateFunction}>Rename User</button>

    </div>);
}
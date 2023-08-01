import {useContext} from "react";
import { AppContext } from "../App";




export const Home =()=>{
    const {userName} = useContext(AppContext);
    return <h1>This is Home page. user: {userName}</h1>
}

export const Contact =()=>{
    return <h1>This is Contact page</h1>
}


export const About =()=>{
    return <h1>This is About page</h1>
}
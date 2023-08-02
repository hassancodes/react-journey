import {useContext} from "react";
import { AppContext } from "../App";




export const Home =()=>{
    const {userName} = useContext(AppContext);
    return <h3>This is Home page. user: {userName}</h3>
}

export const Contact =()=>{
    return <h3>This is Contact page</h3>
}


export const About =()=>{
    return <h3>This is About page</h3>
}
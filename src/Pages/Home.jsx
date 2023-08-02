import {useContext} from "react";
import { AppContext } from "../App";
import {useQuery} from "@tanstack/react-query";
import Axios from "axios";



export const Home =()=>{
    const {userName} = useContext(AppContext);
    // first parameter is the id, second is the request.
    // we dont have to create the state for the data variable
    // test other capabilities as well
    const {data,isLoading}= useQuery(["cat"],()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    });
    if (isLoading){
        return <p>Loading...</p>
    }
    
    return (<div>
        <h3>This is Home page. user: {userName}</h3>
        {/* it will not access the data unless it not fetched/null */}
        <p>{data?.fact}</p>
    </div>);
}

export const Contact =()=>{
    return <h3>This is Contact page</h3>
}


export const About =()=>{
    return <h3>This is About page</h3>
}
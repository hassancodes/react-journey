import exp from "constants";

//  interface is way to define shape of an object.
interface Props{
    name:string,
    email :string,
    age:number,
    friends:string[],
}

// export const Person = (props:Props)=>{
// return (
//     <div>
//         <h1>Name : {props.name}</h1>
//     </div>
// );
// }
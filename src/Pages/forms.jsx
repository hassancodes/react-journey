import {useForm} from "react-hook-form"; 
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export const Form=()=>{
    // react-hook-form is used for handling errors and submission
    // yup is for validation
    const schema = yup.object().shape(
        {
            fullName : yup.string().required(),
            Email : yup.string().email().required(),
            Age : yup.number().positive().integer().min(0).required(),
            Password : yup.string().min(4).max(100).required(),
            Cpassword : yup.string().oneOf([yup.ref("Password"),null, "passwords need to be same"]).required(),
        }
        );
    const {register,handleSubmit,formState:{errors},} = useForm({ 
        resolver:yupResolver(schema),
    });

    const onSubmit=(register)=>{
        console.log("Hello World");
        console.log(register);
    }


    return(
    <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input type="text" placeholder="Enter Full Name" {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
        <input type="email" placeholder="Enter Email" {...register("Email")}/>
        <p>{errors.Email?.message}</p>
        <input type="number" placeholder="Enter Age" {...register("Age")}/>
        <p>{errors.Age?.message}</p>
        <input type="password" placeholder="Enter Password"  {...register("Password")}/>
        <p>{errors.Password?.message}</p>
        <input type="password" placeholder="Confirm Password"  {...register("Cpassword")}/>
        <p>{errors.Cpassword?.message}</p>
        <input type="submit"/>
    </form>
    );
};
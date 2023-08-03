import {useForm} from "react-hook-form"; 
export const Form=()=>{
    // react-hook-form is used for handling errors and submission
    // yup is for validation
    const {register,handleSubmit} = useForm();
    const onSubmit=()=>{
        console.log("Hello World");
    }
    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter Full Name" {...register("Name")}/>
        <input type="email" placeholder="Enter Email"{...register("Email")}/>
        <input type="text" placeholder="Enter Age" {...register("Age")}/>
        <input type="password" placeholder="Enter Password" {...register("Password")}/>
        <input type="password" placeholder="Confirm Password" {...register("Cpassword")}/>
        <input type="submit" name="form-submit" id="submit" />
    </form>
    );
};
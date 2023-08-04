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
            Age : yup.number().positive().integer().min(14).required(),
            Password : yup.string().min(4).max(20).required(),
            Cpassword : yup.string().oneOf([yup.ref("password"),null]).required()
        }
        );
    const {register,handleSubmit} = useForm({ 
        resolver:yupResolver(schema),
    });

    const onSubmit=(data)=>{
        // console.log("Hello World");
        console.log(data);
;
    }


    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter Full Name" {...register("fullName")}/>
        <input type="email" placeholder="Enter Email"{...register("Email")}/>
        <input type="number" placeholder="Enter Age" {...register("Age")}/>
        <input type="password" placeholder="Enter Password" {...register("Password")}/>
        <input type="password" placeholder="Confirm Password" {...register("Cpassword")}/>
        <input type="submit" name="form-submit" id="submit" />
    </form>
    );
};
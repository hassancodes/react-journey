import {useForm} from "react-hook-form"; 
export const Form=()=>{
    // react-hook-form is used for handling errors and submission
    // yup is for validation
    return(
    <form>
        <input type="text" placeholder="Enter Full Name"/>
        <input type="email" placeholder="Enter Email"/>
        <input type="text" placeholder="Enter Age"/>
        <input type="password" placeholder="Enter Password"/>
        <input type="password" placeholder="Confirm Password"/>
        <input type="submit" name="form-submit" id="submit" />
    </form>
    );
};
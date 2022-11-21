import React ,{ useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../auth/login.css';
import InputField from '../textfields/inputfield';
const Reset=()=>{
    const [email,setEmail]=useState({
      email:''
    });
    const [isError, setIsError] = useState('');
    const onInputChange = e => {
      setEmail({ ...email, [e.target.name]: e.target.value });
};
    const checkValidation = () => {
      let error;
      if (!email) {
            error = "username is required..";
      } else { error = "" }

      setIsError(error);
}
console.log(email);
const handleSubmit = async(e) => {
      e.preventDefault();
      checkValidation();
      await axios.post("http://127.0.0.1:8000/accounts/api/password_reset/",email);
      setEmail('');
};
return(

 <div className="container mt-4 ">
 <div className="w-75 h-100 mx-auto p-5 ">
 <h2 className="text-center mt-4 ">                     
            <span className={isError ? "error": "offscreen"}>
               {isError } 
            </span><br /></h2>
            <div className='text-center'> <img src="https://scdn1.plesk.com/wp-content/uploads/2022/07/29164420/cPanel-logo.png" className='img-tag'></img></div>

             <form className='mt-4' onSubmit={handleSubmit}>
                   <div class="bg-light clearfix"></div>
                  <div className='input-div'>     
                               <InputField
                                    type={"text"}
                                    className = {"form-control form-control-md mt-1 nput-div text-center"}
                                    placeholder= {"Enter your email.."}
                                    name={"email"}
                                    value={email?.email}
                                    onChange={e => onInputChange(e)}
                                    label={'email'}  
                                    icon={'fa fa-lock icon'}
                                     />
                  </div>
                        <div className='text-center'>
                            <button 
                                    className='btn btn-primary btn-login' 
                                    >
                                    Reset
                              </button><br/>
                        </div>
                  <div className='text-center mt-4'>
                  <ul><li><Link to="/">cancel</Link></li></ul>
                  </div>
      </form>
         </div> 
             </div>
);
}
export default Reset;



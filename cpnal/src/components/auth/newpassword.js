import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import InputField from "../textfields/inputfield";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const NewPassword = () => {

  const { token } = useParams();
  let intialState={
    token: token,
    password: "",      
    }
    const [user, setUser] = useState(intialState);
    const [isError, setIsError] = useState('');

    const checkValidation = () => {
      let error;
      if (!user.password) {
            error = "password is required..";
      } else { error = "" }

      setIsError(error);
}
    console.log(user);

const handleSubmit = async (e) => {
    e.preventDefault();
    checkValidation();
    await axios.post("http://127.0.0.1:8000/accounts/api/password_reset/confirm/",user);
    // history.push("/");
};

  const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    // <div className="container">
    //   <div className="w-75 mx-auto shadow p-5">
    //     <h2 className="text-center mb-4">Change Password</h2>
    //     <form onSubmit={(e)=>onSubmit(e)}>
    //       <div className="form-group">
    //             <InputField
    //                 type={"text"}
    //                 className = {"form-control form-control-md"}
    //                 placeholder= {"Enter Your New Password"}
    //                 name={"password"}
    //                 value={user?.password}
    //                 onChange={e => onInputChange(e)}  
    //             />
    //       </div>

    //       <button className="btn btn-primary btn-block">change password</button>
    //     </form>
    //   </div>
    // </div>
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
                                       placeholder= {"Enter your new password.."}
                                       name={"password"}
                                       value={user?.password}
                                       onChange={e => onInputChange(e)}
                                       label={'password'}  
                                       icon={'fa fa-lock icon'}
                                        />
                     </div>
                           <div className='text-center'>
                               <button 
                                       className='btn btn-primary btn-login' 
                                       >
                                       change password
                                 </button><br/>
                           </div>
                     <div className='text-center mt-4'>
                     <ul><li><Link to="/">Login</Link></li></ul>
                     </div>
         </form>
            </div> 
                </div>
  );
};

export default NewPassword;

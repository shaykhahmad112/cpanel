import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../textfields/inputfield';
import axios from 'axios';
import '../auth/login.css';

const Register = () => {
      const initialState = {
            username: "",
            email: "",
            password: ""
      }
      const [user, setUser] = useState(initialState);
      const [isValid, setIsValid] = useState(initialState);
      const onInputChange = e => {
            setUser({ ...user, [e.target.name]: e.target.value });
      };
      const checkValidation = () => {
            const error = {};
            if (!user.username) {
                  error.username = "username is required..";
            } else { error.username = "" }
            if (!user.email) {
                error.username = "email is required..";
          } else { error.username = "" }
            if (!user.password) {
                  error.password = "password is required..";
            } else { error.password = "" }

            setIsValid(error);
      }
      const handleSubmit = async(e) => {
            e.preventDefault();
            checkValidation();
            await axios.post("http://localhost:8000/accounts/api/register/",user)
            .then(response => {
                  console.log(response);
            const token  =  response.data.token;
            localStorage.setItem("signuptoken", token);
            //   window.location.href = '/login'
      })
      setUser("");
      };
      console.log(user);
      return (
            <div className="container mt-4 ">
                  <div className="w-75 h-100 mx-auto p-5 ">
                    <div className='text-center'>
                         </div> 
                        <h2 className="text-center mt-4 ">                     
                           <span className={isValid ? "error": "offscreen"}>
                             {isValid.username ? isValid.username : isValid.password } 
                              </span><br /></h2>
                              <div className='text-center'> <img src="https://scdn1.plesk.com/wp-content/uploads/2022/07/29164420/cPanel-logo.png" className='img-tag'></img></div>
                       
                        <form className='mt-4' onSubmit={handleSubmit}>
                              <div className="bg-light clearfix"> </div>

                         <div className='input-div'>
                              <InputField
                                    type={"text"}
                                    className = {"form-control form-control-md mt-1 input-div text-center"}
                                    placeholder= {"Enter your username.."}
                                    name={"username"}
                                    value={user?.username}
                                    onChange={e => onInputChange(e)}
                                    label={'username'}  
                                    icon={'fa fa-user icon"'}
                                     /><br/>
                               
                                     <InputField
                                          type={"text"}
                                          className = {"form-control form-control-md mt-1 nput-div text-center"}
                                          placeholder= {"Enter your email.."}
                                          name={"email"}
                                          value={user?.email}
                                          onChange={e => onInputChange(e)}
                                          label={'email'}  
                                          icon={'fa fa-lock icon'}
                                     /><br/>

                                    <InputField
                                          type={"text"}
                                          className = {"form-control form-control-md mt-1 nput-div text-center"}
                                          placeholder= {"Enter your password.."}
                                          name={"password"}
                                          value={user?.password}
                                          onChange={e => onInputChange(e)}
                                          label={'password'}  
                                          icon={'fa fa-lock icon'}
                                     />
                        </div>  
                              <div className='text-center'>
                                    <button
                                    type='submit'
                                    className='btn btn-primary btn-login'
                                    >
                                     Sigup
                                    </button><br />
                              </div>
                              <div className='text-center mt-4'>
                                    <Link to="/">Login</Link>
                              </div>
                        </form></div>
            </div>

      );
}
export default Register;



import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import InputField from "../textfields/inputfield";
import axios from "axios";

const UserForm = ({id, formTitle ,button_Title, OnSubmit}) => {

  let intialState={
    name: "",
    username: "",
    email: "",
    phone: "",       
    }
    const [user, setUser] = useState(intialState);
    // console.log(user)
    // const { name, username, email, phone,} = user;
  const loadUser =  async() => {
        const result = await axios.get(`http://127.0.0.1:8000/api/updateuser/${id}`); 
        setUser(result.data);
  };


  useEffect(() => {loadUser();}, []);

  const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">{formTitle}</h2>
        <form onSubmit={e => OnSubmit(e, user)}>
          <div className="form-group">
                <InputField
                    type={"text"}
                    className = {"form-control form-control-lg"}
                    placeholder= {"Enter Your Name"}
                    name={"name"}
                    value={user?.name}
                    onChange={e => onInputChange(e)}  
                />
          </div>
          <div className="form-group">
                <InputField
                    type={"text"}
                    className = {"form-control form-control-lg"}
                    placeholder= {"Enter Your Username"}
                    name={"username"}
                    value={user?.username}
                    onChange={e => onInputChange(e)}  
                />
          </div>

          <div className="form-group">
                <InputField
                    type={"text"}
                    className = {"form-control form-control-lg"}
                    placeholder= {"Enter E-mail Address"}
                    name={"email"}
                    value={user?.email}
                    onChange={e => onInputChange(e)}  
            />
          </div>
          <div className="form-group">
                 <InputField
                    type={"text"}
                    className = {"form-control form-control-lg"}
                    placeholder= {"Enter Your Phone Number"}
                    name={"phone"}
                    value={user?.phone}
                    onChange={e => onInputChange(e)}  
            />
          </div>
          <button className="btn btn-primary btn-block">{button_Title}</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

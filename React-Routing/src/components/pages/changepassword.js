import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import InputField from "../textfields/inputfield";
import { useParams } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {

  const { token } = useParams();
  let intialState={
    token: token,
    password: "",      
    }
    const [user, setUser] = useState(intialState);


//   useEffect(() => {loadUser();}, []);
const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/accounts/api/password_reset/confirm/",user);
    // history.push("/");
};

  const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Change Password</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
          <div className="form-group">
                <InputField
                    type={"text"}
                    className = {"form-control form-control-lg"}
                    placeholder= {"Enter Your New Password"}
                    name={"newpassword"}
                    value={user?.name}
                    onChange={e => onInputChange(e)}  
                />
          </div>

          <button className="btn btn-primary btn-block">change password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

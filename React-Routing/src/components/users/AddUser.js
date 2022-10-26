import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import UserForm from "../forms/form";

const AddUser = () => {
  let history = useHistory();

  const onSubmit = async (e, user) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api/userlist",user);
        history.push("/");
  };

  return (
     <UserForm
     formTitle={"Add User"}
     OnSubmit={onSubmit}
     button_Title={"Add"}
    />   
  );
};

export default AddUser;

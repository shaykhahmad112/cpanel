import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import UserForm from "../forms/form";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();

  const onSubmit = async (e, user) => {
    e.preventDefault();
    // await axios.put(`http://localhost:3003/users/${id}`, user);
    await axios.put(`http://127.0.0.1:8000/api/updateuser/${id}`, user);
    history.push("/");
  };

  return (
        <UserForm
        formTitle={"Update User"}
        OnSubmit={onSubmit}
        id={id}
        button_Title={"Update"}
        />
  );
};

export default EditUser;

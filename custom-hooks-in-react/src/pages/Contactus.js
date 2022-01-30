import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import useTitle from "../hooks/useTitle";

const Contactus = () => {
  useTitle("Contact us");
  const [values, handleChange] = useForm();

  // Navigae returns a function
  // let navigate = useNavigate();

  return (
    <div>
      {/* To go to the home section without refreshing the page, use navigate
      <button onClick={() => navigate("/")}>Go to home</button> */}

      {values.fullname}
      <form action="">
        <input type="text" name="fullname" onChange={(e) => handleChange(e)} />
        <input type="text" name="username" onChange={(e) => handleChange(e)} />
        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Contactus;

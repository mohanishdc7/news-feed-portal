import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


import classes from "./Register.module.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (event) => {
    Axios.post("http://localhost:3002/api/sign-up", {
      email: email,
      password: password,
    });
    setIsSubmitted(true);
  };

  // JSX code for login form
  const renderForm = (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <div className={classes.inputContainer}>
          <label>Email </label>
          <input
            type='email'
            name='email'
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={classes.inputContainer}>
          <label>Password </label>
          <input
            type='password'
            name='password'
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={classes.buttonContainer}>
          <input type='submit' />
        </div>
        <div className='text-center'>
          <span>Already registered? </span>
          <Link to='/login'>Sign in</Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className={classes.registrationForm}>
      <h1 className={classes.title}>Sign Up</h1>
      {isSubmitted ? <div>User has registered successfully</div> : renderForm}
    </div>
  );
}

export default Register;

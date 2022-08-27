import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Axios from "axios";

import { useAuth } from "../../contexts/AuthContext";
import classes from "./Register.module.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { currentUser, signup } = useAuth();

  const navigate = useNavigate();

  // const submitHandler = (event) => {
  //   Axios.post("http://localhost:3002/api/sign-up", {
  //     email: email,
  //     password: password,
  //   });
  //   setIsSubmitted(true);
  // };

  async function submitHandler(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  // JSX code for login form
  const renderForm = (
    <div className={classes.registrationForm}>
      <h1 className={classes.title}>Sign Up</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <div className={classes.inputContainer}>
            <label>Email </label>
            <input
              type='email'
              name='email'
              required
              autoComplete="off"
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
            <input disabled={loading} type='submit' />
          </div>
          <div className='text-center'>
            <span>Already have an account? </span>
            <Link to='/login'>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );

  return !currentUser ? renderForm : <Navigate to="/" />;
}

export default Register;

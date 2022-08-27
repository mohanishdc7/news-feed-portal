import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Axios from "axios";

import { useAuth } from "../../contexts/AuthContext";
import classes from "./Login.module.css";

function Login() {
  // React States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, login } = useAuth();
  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  async function handleSubmit(event) {
    event.preventDefault();

    // Find user login info
    // Axios.post("http://localhost:3002/api/login-check", {
    //   email: email,
    //   password: password,
    // }).then((res) => {
    //   const token = res.data;
    //   if (token) {
    //     setIsSubmitted(true);
    //   } else {
    //     alert(errorMessage);
    //     window.location.reload();
    //   }
    // });

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  const renderForm = (
    <div className={classes.loginForm}>
      <h1 className={classes.title}>Sign In</h1>
      {error && <Alert variant='danger'>{error}</Alert>}
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
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
            <span>Don't have an account? </span>
            <Link to='/sign-up'>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );

  return !currentUser ? renderForm : <Navigate to="/" />;
}

export default Login;

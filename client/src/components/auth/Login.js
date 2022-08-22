import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import classes from "./Login.module.css";

function Login({ setToken }) {
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorMessage = "invalid email or password";

  const handleSubmit = (event) => {
    event.preventDefault();

    // Find user login info
    Axios.post("http://localhost:3002/api/login-check", {
      email: email,
      password: password,
    }).then((res) => {
      const token = res.data;
      console.log(token);

      if (token) {
        setIsSubmitted(true);
        console.log(token);
      } else {
        console.log(errorMessage);
        alert(errorMessage);
        window.location.reload();
      }
    });
  };
  
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      <p>...loading</p>
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );

  // JSX code for login form
  const renderForm = (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
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
          <span>Not registered yet? </span>
          <Link to='/sign-up'>Sign up</Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className={classes.loginForm}>
      <h1 className={classes.title}>Sign In</h1>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}

export default Login;

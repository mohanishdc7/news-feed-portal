import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext";
import classes from "./Logout.module.css";

function Logout() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return !currentUser ? (
    <div></div>
  ) : (
    <button variant='link' className={classes.logoutButton} onClick={handleLogout}>
      Sign Out
      {error && <Alert variant='danger'>{error}</Alert>}
    </button>
  );
}

export default Logout;

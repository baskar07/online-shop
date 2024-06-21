import React from "react";
import "./Login.css";
import login from "../../../assets/login.svg";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="main">
      <div class="container">
        <div className="form-container sign-in-container">
          <div className="form-group">
            <h2>Sign in</h2>
            <form action="">
              <input type="text" placeholder="Enter your email" />
              <input type="text" placeholder="Enter your password" />
              <Link className="forgot">Forgot password</Link>
              <button className="btn">Sign in</button>
            </form>
            <p>
              create new account? <Link className="signup-link">Register</Link>
            </p>

            <h5>or</h5>

            <button className="google-btn"><FaGoogle className="google-icon" />Continue with Google</button>
          </div>
        </div>

        <div className="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <img src={login} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

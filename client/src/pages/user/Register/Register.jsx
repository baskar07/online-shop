import React from "react";
import "./Register.css";
import login from "../../../assets/register.svg";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="main">
    <div class="container">
      <div className="form-container sign-in-container">
        <div className="form-group">
          <h2>Sign Up</h2>
          <form action="">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Enter your password" />
            <input  type="hidden" placeholder="Enter your password" />
            <button className="signup-btn">Sign Up</button>
          </form>
          <p>
            Already have you account? <Link className="signup-link">signin</Link>
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
  )
}

export default Register
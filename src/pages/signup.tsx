// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const navigate = useNavigate();

//   const handleSignup = () => {
//     localStorage.setItem('isAuth', 'true');
//     navigate('/dashboard');
//   };

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/auth.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("userName", name);
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img
          src="auth2.jpeg"
          alt="Signup Illustration"
        />
      </div>

      <div className="auth-right">
        <h1>Sign up</h1>
        <p>
          Already have an account? <Link to="/login" className="register-link">Log in</Link>
        </p>

        <form onSubmit={handleSignup}>

            <label>Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Create a password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" required />

          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            </div>

          <button type="submit" className="login-btn">Register</button>
          <p className="or">or continue with</p>

           <div className="socials">
                     <span><FaFacebookF /></span>
                     <span><FaApple /></span>
                     <span><FaGoogle /></span>
                   </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import insta from "../assests/insta.jpg";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // simple fake auth (same style as your signup)
    if (!email || !password) return;

    localStorage.setItem("isAuth", "true");
    navigate("/dashboard"); // change if needed
  };

  return (
    <div className="connectPage">
      
      {/* Login Card */}
      <div className="connectCard">
        
        {/* Logo */}
        <img style={{ width: "130px", borderRadius: "80px" }}
          src={insta}
          alt="Instagram"
        />

        {/* FORM */}
        <form onSubmit={handleLogin} className="w-full">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 px-3 py-2 text-sm border border-gray-300 rounded bg-gray-50 focus:outline-none"
          />
<br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded bg-gray-50 focus:outline-none"
          />
<br />
          <button
            type="submit"
            className="connect-social-btn flex align-center w-full bg-blue-400 text-white py-2 rounded font-semibold text-sm mb-4"
          >
            Log in
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center w-full mb-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-4 text-xs text-gray-500 font-semibold">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Facebook Login */}
        <button className="flex items-center gap-2 text-sm text-blue-900 font-semibold mb-4">
          <FaFacebookF />
          Log in with Facebook
        </button>

        {/* Forgot Password */}
        <a href="#" className="text-xs text-blue-900">
          Forgot password?
        </a>
      </div>

      
    </div>
  );
};

export default Login;

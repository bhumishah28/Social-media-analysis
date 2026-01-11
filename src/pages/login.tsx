// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     localStorage.setItem('isAuth', 'true'); // fake login
//     navigate('/dashboard');
//   };
 import { useNavigate, Link } from 'react-router-dom';
 import "../styles/auth.css";
 import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";



export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake auth for now
    localStorage.setItem('isAuth', 'true');
    navigate('/dashboard');
  };


  return (

    <div className="auth-container">
      {/* Left Illustration */}
      <div className="auth-left">
        <img
          src="auth2.jpeg"
          alt="Login Illustration"
        />
      </div>

      {/* Right Form */}
      <div className="auth-right">
        <h1>Log in</h1>
        <p>
          If you don’t have an account,{" "}
          <Link to="/signup" className="register-link">Register here!</Link>
        </p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email address" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span className="forgot">Forgot Password?</span>
          </div>

          <button type="submit" className="login-btn">Login</button>

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
}

import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";

import { AuthContext } from "../authContext/Auth";

const Login = () => {
  const { login } = React.useContext(AuthContext);
  let API_URL = "http://localhost:3001/users";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const generateToken = () => {
    const token = Math.random().toString(36).substr(2);
    return token;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    axios
      .get(API_URL, { params: { email: formData.email } })
      .then((response) => {
        const user = response.data.find((u) => u.email === formData.email);
        if (user && user.password === formData.password) {
          console.log("Login successful!");
        }
        
        if (user) {
          const token = generateToken();
          
          const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
        } 
        login(userData);
        localStorage.setItem("token", token);

        alert("Login successful! Welcome back, " + user.name);

        window.location.href = "/";


         } else {
          alert("Invalid Email or Password");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="extra-links">
          <a href="/forgot-password">Forgot Password?</a>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;

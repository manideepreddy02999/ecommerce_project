import React, { useState } from "react";
import axios from "axios"; 
import "../styles/Register.css";
import { createElement } from "react";
import { useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmation = document.querySelector(".confirmation");
  const details = document.querySelector("#details");
  // const get_data = () => {
  //   axios.get("http://localhost:3001/student").then((response) => {
  //     return response.data;
  //   });
  // };


  // useEffect(() => {

  // }, []);

//   const [submittedData, setSubmittedData] = useState(null);

  const apiUrl = "http://localhost:3001/users";

  const triggerFeedback = (message, type) => {
    console.log(message);
    console.log(type);
    confirmation.innerHTML = `<p className=${type}>${message}</p>`;
    confirmation.style.display = "block";

    setTimeout(() => {
      confirmation.style.display = "none";
    }, 3000);
  };

  const validateForm = () => {
    const validName = /^[a-zA-Z]+$/;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || password === "") {
      triggerFeedback("Please fill in all fields", "error");
      return false;
    }
    if (!validName.test(name)) {
      triggerFeedback("Please enter a valid name", "error");
      return false;
    }
    if (!validEmail.test(email)) {
      triggerFeedback("Please enter a valid email", "error");
      return false;
    }
    if (password.length < 6) {
      triggerFeedback("Password must be at least 6 characters", "warning");
      return false;
    }
    if (password !== confirmPassword) {
      triggerFeedback("Passwords do not match", "error");
      return false;
    }

    return true; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    const data = {
      name: name,
      email: email,
      password: password,
    };

    axios.get(apiUrl, { params: { email } })
      .then((response) => {
        if (response.data.length > 0) {
          triggerFeedback("Email already exists", "error");
        } else {
          axios
            .post(apiUrl, data)
            .then((response) => {
              
              console.log(response.data);
              triggerFeedback("Registration successful!", "success");
            })
            .catch((error) => {
              console.error("There was an error!", error);
            });
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        triggerFeedback("Server error. Please try again.", "error");
      });
  };

  return (
    <div className="register-container">
        {/* {feedback.message && ( details.innerHTML = feedback.message
      )} */}  
          
 


      <form id="register-form" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p>Join us</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
         <div className="confirmation">hi</div>

        <button type="submit">Register</button>
      </form>
      

      {/* {submittedData && (
        <div id="details">
          <h2>Name: {submittedData.name}</h2>
          <h2>Email: {submittedData.email}</h2>
          <h2>Password: {submittedData.password}</h2>
        </div>
      )} */}
    </div>
  );
};

export default Register;
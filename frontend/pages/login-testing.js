import React, { useState } from 'react';
import axios from 'axios';
import HeaderOne from "../components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import Footer from "@/components/footer";

const Login = () => {
  const [loginData, setLoginData] = useState({
    role: '', // default value is buyer
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth_materialyz/login/', loginData);

      // Check if the role returned from the backend matches the selected role.
      if (response.data.role !== loginData.role) {
        alert('Login failed! The selected role does not match the account role.');
        return;
      }

      // Save the tokens and role in localStorage
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      localStorage.setItem('user_role', response.data.role);

      alert('Login successful!');
      // Redirect to the home page after successful login
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
          .login-container {
            margin: 0 auto;
            max-width: 410px;
            padding: 2rem 1.5rem;
            border-radius: 0.5rem;
            background: #fff;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          .login-container .form-title {
            text-align: center;
            font-size: 1.37rem;
            font-weight: 600;
            margin-bottom: 1.87rem;
          }
          .login-container .social-login {
            display: flex;
            gap: 1.31rem;
          }
          .social-login .social-button {
            display: flex;
            gap: 0.81rem;
            width: 100%;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            padding: 0.75rem 0;
            border-radius: 0.31rem;
            align-items: center;
            justify-content: center;
            background: rgb(249, 248, 255);
            border: 1px solid #D5CBFF;
            transition: 0.3s ease;
          }
          .social-login .social-button:hover {
            border-color: orange;
            background: #f1eff9;
          }
          .social-login .social-button .social-icon {
            width: 23px;
          }
          .login-container .separator {
            position: relative;
            margin: 1.5rem 0;
            text-align: center;
            background: #fff;
          }
          .login-container .separator span {
            z-index: 1;
            font-weight: 500;
            color: orangered;
            position: relative;
            background: #fff;
            font-size: 1.06rem;
            padding: 0 0.9rem;
          }
          .login-container .separator::after {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            height: 1px;
            width: 100%;
            background: orange;
          }
          .login-container .login-form .input-wrapper {
            height: 54px;
            width: 100%;
            position: relative;
            margin-bottom: 1.5rem;
          }
          .login-container .login-form .input-field {
            width: 100%;
            height: 100%;
            outline: none;
            font-size: 1.06rem;
            border-radius: 0.31rem;
            border: 1px solid orange;
            padding: 0px 1.25rem 0 3.12rem;
            transition: 0.2s ease;
          }
          .login-container .login-form .input-field:focus {
            border-color: orangered;
          }
          .login-container .login-form .input-field::placeholder {
            color: gray;
          }
          .login-container .login-form .input-wrapper i {
            position: absolute;
            top: 50%;
            height: 100%;
            display: flex;
            color: orange;
            align-items: center;
            transform: translateY(-50%);
            transition: 0.2s ease;
          }
          .login-container .login-form .input-wrapper i:not(.eye-icon) {
            left: 0.93rem;
            pointer-events: none;
          }
          .login-container .login-form .input-field:focus ~ i:not(.eye-icon) {
            color: orangered;
          }
          .login-container .login-form .input-wrapper i.eye-icon {
            display: none;
            right: 0.93rem;
            color: orangered;
            cursor: pointer;
            font-size: 1.25rem;
          }
          .login-container .login-form .input-wrapper .input-field:valid ~ .eye-icon {
            display: flex;
          }
          .login-container .login-form .forgot-password-link {
            display: block;
            width: fit-content;
            margin-top: -0.44rem;
          }
          .login-container .login-form .login-button {
            border: none;
            outline: none;
            width: 100%;
            height: 54px;
            color: #fff;
            font-size: 1.125rem;
            font-weight: 500;
            cursor: pointer;
            margin-top: 2.19rem;
            border-radius: 0.31rem;
            background: orange;
            transition: 0.3s ease;
          }
          .login-container .login-form .login-button:hover {
            background: orangered;
          }
          .login-container .signup-prompt {
            text-align: center;
            font-size: 1.06rem;
            font-weight: 500;
            margin: 1.75rem 0 0.31rem;
          }
          .login-container a {
            color: orangered;
            font-weight: 500;
            text-decoration: none;
          }
          .login-container a:hover {
            text-decoration: underline;
          }
          
          /* Styling for the Register as dropdown */
              .user-type-dropdown-wrapper {
                width: 100%;
                position: relative;
                margin-bottom: 1.5rem;
              }

              .user-type-dropdown {
                width: 100%;
                padding: 0.75rem 1.25rem;
                font-size: 1rem;
                border-radius: 0.31rem;
                border: 1px solid orange;
                background-color: #fff;
                color: gray; /* Set font color to gray */
                transition: 0.3s ease;
                font-weight: 500;
              }

              .user-type-dropdown:focus {
                border-color: orangered;
                color: orangered; /* Set font color to orange when focused */
              }

              /* Add icon to the right of the dropdown */
              .dropdown-icon {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 1.25rem;
                color: orange;
              }

              .user-type-radio-wrapper {
                display: flex;
                align-items: center;
                gap: 20px;       /* Space between elements */
                margin-bottom: 1rem;
                margin-left: 50px;
              }

              .login-as-label {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                margin-bottom: 10px;
              }

              .user-type-radio-wrapper label {
                display: flex;
                align-items: center;
                font-size: 18px;
                color: #333;
                cursor: pointer;
              }

              .user-type-radio-wrapper input[type="radio"] {
                margin-right: 8px;
                accent-color: #f57224;  /* Modern browsers only */
              }

        `}
      </style>
      <MenuContextProvider>
        <Layout PageTitle="Home Page">
          <HeaderOne />
          <div className="login-container" style={{ marginBottom: "60px" }}>
            <h2 className="form-title" style={{ color: "orangered" }}>Log in</h2>
            <form onSubmit={handleSubmit} className="login-form">
              {/* Dropdown for selecting role */}
              {/* <div className="user-type-dropdown-wrapper">
                <select
                  name="role"
                  value={loginData.role}
                  onChange={handleChange}
                  className="user-type-dropdown"
                  required
                >
                  <option value="" disabled>Login as</option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
              </div> */}
              <div className="user-type-radio-wrapper">
                <span className="login-as-label">Login as:</span>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="buyer"
                    checked={loginData.role === "buyer"}
                    onChange={handleChange}
                    required
                  />
                  Buyer
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="seller"
                    checked={loginData.role === "seller"}
                    onChange={handleChange}
                    required
                  />
                  Seller
                </label>
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Username"
                  required
                />
                <i className="material-symbols-rounded">person</i>
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Password"
                  required
                />
                <i className="material-symbols-rounded">lock</i>
              </div>
              <button type="submit" className="login-button">Log In</button>
            </form>
            <p className="signup-prompt">
              Don&apos;t have an account? <a href="./sign-testing" className="signup-link">Sign up</a>
            </p>
          </div>
          <Footer />
        </Layout>
      </MenuContextProvider>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
// import SocialLogin from "../components/SocialLogin";
import InputField from "../components/InputField";
import HeaderOne from "../components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import axios from 'axios';


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    // Email Validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    return newErrors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        email: formData.email,
        password: formData.password,
      });
      alert(response.data.message); // Handle response (store JWT token if necessary)
    } catch (error) {
      alert('Login failed: ' + error.response.data.error);
    }
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
            /* Importing Google Fonts - Montserrat */
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

            /* Scoped styles for the login-container only */
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
              background:rgb(249, 248, 255);
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
          `}
      </style>

      <MenuContextProvider>
        <Layout PageTitle="Home Page">
          <HeaderOne />
          <div className="login-container" style={{marginBottom:"60px"}}>
            <h2 className="form-title" style={{ color: "orangered" }}>Log in</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <InputField
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                icon="mail"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                icon="lock"
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
              <button type="submit" className="login-button">Log In</button>
            </form>
            <p className="signup-prompt">
              Don&apos;t have an account? <a href="./signup" className="signup-link">Sign up</a>
            </p>
          </div>
          <Footer />
        </Layout>
      </MenuContextProvider>
    </div>
  );
};

export default Login;

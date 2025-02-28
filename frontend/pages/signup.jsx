import React, { useState } from 'react';
import SocialLogin from "../components/SocialLogin";
import InputField from "../components/InputField";
import HeaderOne from "../components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import axios from 'axios';

const Signup = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    // lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gst_number: "",
    compnay_name: "",
    email: "",
    username: "", // Added username field
    address: "",  // Added address field
  });
  const [errors, setErrors] = useState({});

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      companyGSTNo: "",
      companyName: "",
      companyEmail: "",
      username: "",
      address: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name Fields Validation
    if (!formData.full_name) newErrors.full_name = "First name is required.";
    console.log(formData);
    // if (!formData.lastName) newErrors.lastName = "Last name is required.";

    // Username Validation
    if (!formData.username) newErrors.username = "Username is required.";

    // Address Validation
    if (!formData.address) newErrors.address = "Address is required.";

    // Email Validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone Validation
    if (!formData.phone) newErrors.phone = "Phone number is required.";

    // Password Validation
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Check for empty password fields
    if (!formData.password || !formData.confirmPassword) {
      newErrors.password = "Please provide both password and confirm password.";
    }

    console.log(formData);

    // Company Details Validation for Seller
    if (userType === "seller") {
      if (!formData.gst_number) newErrors.gst_number = "Company GST No. is required.";
      if (!formData.compnay_name) newErrors.compnay_name = "Company name is required.";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.companyEmail)) {
        newErrors.email = "Please enter a valid company email address.";
      }
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
        const response = await axios.post('http://127.0.0.1:8000/auth_materialyz/signup/', formData);
        alert(response.data.message); // Handle response
      } catch (error) {
        alert('Signup failed: ' + error.response.data.error);
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

          /* Scoped styles for the signup-container only */
          .signup-container {
            margin: 0 auto;
            max-width: 410px;
            padding: 2rem 1.5rem;
            border-radius: 0.5rem;
            background: #fff;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .signup-container .form-title {
            text-align: center;
            font-size: 1.37rem;
            font-weight: 600;
            margin-bottom: 1.87rem;
          }

          .signup-container .social-login {
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

          .signup-container .separator {
            position: relative;
            margin: 1.5rem 0;
            text-align: center;
            background: #fff;
          }

          .signup-container .separator span {
            z-index: 1;
            font-weight: 500;
            color: orangered;
            position: relative;
            background: #fff;
            font-size: 1.06rem;
            padding: 0 0.9rem;
          }

          .signup-container .separator::after {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            height: 1px;
            width: 100%;
            background: orange;
          }

          .signup-container .signup-form .input-wrapper {
            height: 54px;
            width: 100%;
            position: relative;
            margin-bottom: 1.5rem;
          }

          .signup-container .signup-form .input-field {
            width: 100%;
            height: 100%;
            outline: none;
            font-size: 1.06rem;
            border-radius: 0.31rem;
            border: 1px solid orange;
            padding: 0px 1.25rem 0 3.12rem;
            transition: 0.2s ease;
          }

          .signup-container .signup-form .input-field:focus {
            border-color: orangered;
          }

          .signup-container .signup-form .input-field::placeholder {
            color: gray;
          }

          .signup-container .signup-form .input-wrapper i {
            position: absolute;
            top: 50%;
            height: 100%;
            display: flex;
            color: orange;
            align-items: center;
            transform: translateY(-50%);
            transition: 0.2s ease;
          }

          .signup-container .signup-form .input-wrapper i:not(.eye-icon) {
            left: 0.93rem;
            pointer-events: none;
          }

          .signup-container .signup-form .input-field:focus ~ i:not(.eye-icon) {
            color: orangered;
          }

          .signup-container .signup-form .input-wrapper i.eye-icon {
            display: none;
            right: 0.93rem;
            color: orangered;
            cursor: pointer;
            font-size: 1.25rem;
          }

          .signup-container .signup-form .input-wrapper .input-field:valid ~ .eye-icon {
            display: flex;
          }

          .signup-container .signup-form .forgot-password-link {
            display: block;
            width: fit-content;
            margin-top: -0.44rem;
          }

          .signup-container .signup-form .signup-button {
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
            margin-top: 20px;
          }

          .signup-container .signup-form .signup-button:hover {
            background: orangered;
          }

          .signup-container .signup-prompt {
            text-align: center;
            font-size: 1.06rem;
            font-weight: 500;
            margin: 1.75rem 0 0.31rem;
          }

          .signup-container a {
            color: orangered;
            font-weight: 500;
            text-decoration: none;
          }

          .signup-container a:hover {
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
        `}
      </style>

      <MenuContextProvider>
        <Layout PageTitle="Sign Up">
          <HeaderOne />
          <div className="signup-container" style={{marginBottom:"60px"}}>
            <h2 className="form-title" style={{ color: "orangered" }}>Sign Up</h2>
            <div className="user-type-dropdown-wrapper">
              <select
                className="user-type-dropdown"
                value={userType}
                onChange={handleUserTypeChange}
                aria-label="Register as"
              >
                <option value="" disabled>Select Registration Type</option>
                <option value="buyer">Register as Buyer</option>
                <option value="seller">Register as Seller</option>
              </select>
            </div>

            <form onSubmit={handleSubmit} className="signup-form" method='POST'>
              <InputField
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                icon="account_circle"
              />
              {errors.username && <div className="error-message">{errors.username}</div>}
              <InputField
                type="text"
                name="full_name"
                placeholder="First Name"
                value={formData.full_name}
                onChange={handleInputChange}
                icon="person"
              />
              {/* {errors.firstName && <div className="error-message">{errors.firstName}</div>}
              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                icon="person"
              /> */}
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
              <InputField
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                icon="home"
              />
              {errors.address && <div className="error-message">{errors.address}</div>}
              <InputField
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                icon="mail"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
              <InputField
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                icon="phone"
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                icon="lock"
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
              <InputField
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                icon="vpn_key"
              />
              {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

              {userType === "seller" && (
                <>
                  <InputField
                    type="text"
                    name="companyGSTNo"
                    placeholder="Company GST No."
                    value={formData.companyGSTNo}
                    onChange={handleInputChange}
                    icon="receipt"
                  />
                  {errors.companyGSTNo && <div className="error-message">{errors.companyGSTNo}</div>}
                  <InputField
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    icon="store"
                  />
                  {errors.companyName && <div className="error-message">{errors.companyName}</div>}
                  <InputField
                    type="email"
                    name="companyEmail"
                    placeholder="Company Email"
                    value={formData.companyEmail}
                    onChange={handleInputChange}
                    icon="business_center"
                  />
                  {errors.companyEmail && <div className="error-message">{errors.companyEmail}</div>}
                </>
              )}

              <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <p className="signup-prompt">
              Already have an account? <a href="./login" className="signup-link">Log In</a>
            </p>
          </div>
          <Footer />
        </Layout>
      </MenuContextProvider>
    </div>
  );
};

export default Signup;

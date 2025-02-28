import React, { useState, useEffect } from 'react';
import SocialLogin from "../components/SocialLogin";
import InputField from "../components/InputField";
import HeaderOne from "../components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    full_name: '',
    compnay_name: '',
    phone: '',
    address: '',
    gst_number: '',
    profile_picture: null,
  });
  
  // State for OTP and OTP modal visibility
  const [otp, setOtp] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      profile_picture: e.target.files[0],
    }));
  };

  // When the user clicks "Sign Up", create the user and show the OTP modal
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      // Call the signup endpoint to create the user and send OTP email
      await axios.post('http://127.0.0.1:8000/auth_materialyz/signup/', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('User created. An OTP has been sent to your email.');
      setShowOtpModal(true);
    } catch (error) {
      console.error(error);
      alert('Signup failed!');
    }
  };

  // When the user enters the OTP and clicks "Verify OTP", hit the verify-OTP endpoint
  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth_materialyz/verify-otp/', {
        email: formData.email,
        otp: otp
      });
      alert(response.data.message || 'OTP verified successfully!');
      window.location.href = './login-testing';
    } catch (error) {
      console.error(error);
      alert('OTP verification failed! Please check your OTP or try again.');
    }
  };

  return (
    <MenuContextProvider>
      <Layout PageTitle="Sign Up">
        <HeaderOne />
        <div className="signup-container" style={{ marginBottom: "60px" }}>
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
                color: orangered;
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
                margin-top: 20px;
                border-radius: 0.31rem;
                background: orange;
                transition: 0.3s ease;
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
                color: gray;
                transition: 0.3s ease;
                font-weight: 500;
              }

              .user-type-dropdown:focus {
                border-color: orangered;
                color: orangered;
              }

              .dropdown-icon {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 1.25rem;
                color: orange;
              }

              /* Styling for the OTP Modal */
              .otp-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
              }
              .otp-modal {
                background: #fff;
                padding: 2rem;
                border-radius: 0.5rem;
                max-width: 350px;
                width: 90%;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                text-align: center;
                position: relative;
              }
              .otp-modal h3 {
                margin-bottom: 1rem;
              }
              .otp-modal input {
                width: 100%;
                padding: 0.75rem;
                margin-bottom: 1rem;
                border: 1px solid #ccc;
                border-radius: 0.25rem;
                font-size: 1rem;
              }
              .otp-modal button {
                padding: 0.75rem 1.5rem;
                background: orange;
                border: none;
                border-radius: 0.25rem;
                color: #fff;
                font-size: 1rem;
                cursor: pointer;
              }
              .otp-modal button:hover {
                background: orangered;
              }
              .otp-modal .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
                background: transparent;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
              }
            `}
          </style>
          <h2 style={{ color: "orangered" }} className="form-title">Sign Up</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="user-type-dropdown-wrapper">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="user-type-dropdown"
                required
              >
                <option value="" disabled>Select Registration Type</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input-field"
                placeholder="Username"
                required
                icon="account_circle"
              />
              <i className="material-symbols-rounded">account_circle</i>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="input-field"
                placeholder="Full Name"
                required
                icon="person"
              />
              <i className="material-symbols-rounded">person</i>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-field"
                placeholder="Address"
                icon="home"
              />
              <i className="material-symbols-rounded">home</i>
            </div>
            {formData.role === 'seller' && (
              <>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="gst_number"
                    value={formData.gst_number}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Company GST No."
                    icon="receipt"
                  />
                  <i className="material-symbols-rounded">receipt</i>
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="compnay_name"
                    value={formData.compnay_name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Company Name"
                    icon="store"
                  />
                  <i className="material-symbols-rounded">store</i>
                </div>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Company Email"
                    icon="business_center"
                  />
                  <i className="material-symbols-rounded">business_center</i>
                </div>
              </>
            )}
            {formData.role === 'buyer' && (
              <>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Email Address"
                    required
                    icon="mail"
                  />
                  <i className="material-symbols-rounded">mail</i>
                </div>
              </>
            )}
            <div className="input-wrapper">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="Phone"
                required
                icon="phone"
              />
              <i className="material-symbols-rounded">phone</i>
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder="Password"
                required
                icon="lock"
              />
              <i className="material-symbols-rounded">lock</i>
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className="input-field"
                placeholder="Confirm Password"
                required
                icon="vpn_key"
              />
              <i className="material-symbols-rounded">vpn_key</i>
            </div>
            <div className="input-wrapper">
              {/* <label style={{fontWeight:"500"}} htmlFor="profile_picture" className="file-label">
                Upload your profile pic
              </label> */}
              <input
                type="file"
                name="profile_picture"
                onChange={handleFileChange}
              />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="signup-prompt">
            Already have an account? <a href="./login-testing">Log In</a>
          </div>
        </div>
        <Footer />
      </Layout>
      {showOtpModal && (
        <div className="otp-modal-overlay">
          <div className="otp-modal">
            <button className="close-button" onClick={() => setShowOtpModal(false)}>×</button>
            <h3 style={{ fontSize: "25px" }}>Enter OTP</h3>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleOtpSubmit}>Verify OTP</button>
          </div>
        </div>
      )}
    </MenuContextProvider>
  );
};

export default Signup;

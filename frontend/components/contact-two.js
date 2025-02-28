import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import Email.js
import { Col, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { ContactFromData, ContactInfosData } from "@/data";

const ContactOne = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
    file_url: "",
  });

  const [loading, setLoading] = useState(false);

  // Email.js Configuration
  const SERVICE_ID = "service_s64akvq";
  const TEMPLATE_ID = "template_zoow374";
  const PUBLIC_KEY = "qcX55ALergqtCaWGF";

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle File Upload (Upload to Cloudinary)
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("upload_preset", "your_upload_preset"); // Replace with Cloudinary preset

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/your_cloudinary_name/upload", {
        method: "POST",
        body: formDataUpload,
      });
      const data = await response.json();
      setFormData({ ...formData, file_url: data.secure_url }); // Save uploaded file URL
    } catch (error) {
      console.error("File upload failed:", error);
    }

    setLoading(false);
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return alert("File is still uploading...");

    const emailData = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      file_url: formData.file_url, // Send File URL
    };

    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY);
      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <section className="contact-section sec-pad">
      <div className="thm-container">
        <Row>
          <Col lg={8}>
            <div className="contact-form-content">
              <SectionTitle data={ContactFromData.sectionContent} />
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Your full name" onChange={handleChange} required />
                <input type="text" name="company" placeholder="Company name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Your email address" onChange={handleChange} required />

                <select name="subject" onChange={handleChange} required>
                  <option value="" disabled selected>Select Subject</option>
                  <option value="inquiry">Product Inquiry</option>
                  <option value="delivery">Order Delivery</option>
                  <option value="payment-refund">Order Payment/Refund</option>
                  <option value="payment">Payment Related</option>
                  <option value="other">Other</option>
                </select>

                <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>

                <input type="file" name="file" onChange={handleFileUpload} accept=".pdf,.jpg,.png,.docx" />
                {loading && <p>Uploading file...</p>}

                <button type="submit" className="thm-btn yellow-bg">
                  Submit Now
                </button>
              </form>
            </div>
          </Col>

          <Col lg={4}>
            <div className="contact-info text-center">
              <SectionTitle data={ContactInfosData.sectionContent} />
              {ContactInfosData.posts.map(({ title, text, socials }, index) => (
                <div className="single-contact-info" key={index}>
                  <h4>{title}</h4>
                  {text && <p>{text}</p>}
                  {socials && (
                    <div className="social">
                      {socials.map(({ icon, url }, index) => (
                        <a key={index} href={url} className={`${icon} hvr-pulse`}></a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactOne;

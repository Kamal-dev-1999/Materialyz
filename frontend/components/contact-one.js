import React from "react";
import SectionTitle from "@/components/section-title";
import { ContactFromData, ContactInfosData } from "@/data";
import { Col, Row } from "react-bootstrap";

const ContactOne = () => {
  return (
    <section className="contact-section sec-pad">
      <div className="thm-container">
        <Row>
          <Col lg={8}>
          <div className="contact-form-content">
            <SectionTitle data={ContactFromData.sectionContent} />

            <form action="inc/sendemail.php" className="contact-form">
              <input type="text" name="name" placeholder="Your full name" />
              <input type="text" name="company-name" placeholder="Company name" />
              <input type="text" name="email" placeholder="Your email address" />
              
              <select name="subject">
                <option value="" disabled selected>Select Subject</option>
                <option value="inquiry">Product Inquiry</option>
                <option value="delivery">Order Delivery</option>
                <option value="payment-refund">Order Payment/Refund</option>
                <option value="payment">Payment Related</option>
                <option value="other">Other</option>
              </select>
              
              <textarea name="message" placeholder="Message"></textarea>
              <input type="file" name="file-upload" placeholder="Upload your file"/>
              
              <button type="submit" className="thm-btn yellow-bg">
                Submit Now
              </button>
              <div className="form-result"></div>
            </form>
          </div>

          </Col>
          <Col lg={4}>
            <div className="contact-info text-center">
              <SectionTitle data={ContactInfosData.sectionContent} />
              {ContactInfosData.posts.map(({ title, text, socials }, index) => {
                return (
                  <div className="single-contact-info" key={index}>
                    <h4>{title}</h4>
                    {text !== undefined ? <p>{text}</p> : null}
                    {socials !== undefined ? (
                      <div className="social">
                        {socials.map(({ icon, url }, index) => {
                          return (
                            <a
                              key={index}
                              href={url}
                              className={`${icon} hvr-pulse`}
                            ></a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactOne;

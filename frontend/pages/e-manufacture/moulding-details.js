import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import fabrication from "../../assets/img/digifactory/service-details/moulding.png";

const ProjectDetails = () => {
  const handleQuoteRequest = () => {
    const userRole = localStorage.getItem("userRole"); // Assume userRole is saved in localStorage

    // Check user role and redirect accordingly
    if (userRole === "guest") {
      window.location.href = "/login"; // Redirect to login if the user is a guest
    } else if (userRole === "buyer" || userRole === "seller") {
      window.location.href = "/contact-us"; // Redirect to contact us if the user is a buyer or seller
    } else {
      window.location.href = "/login"; // Default to login if no user role is found
    }
  };

  return (
    <section className="project-details-page sec-pad">
      <div className="thm-container" style={{ marginTop: "-50px" }}>
        <Row>
          <Col lg={6}>
            <div className="project-details-content">
              <br />
              <h3 style={{ fontSize: "50px" }}>Injection Moulding</h3>
              <br />
              <p style={{ fontSize: "20px", color: "black" }}>
                Materialyz utilizes injection molding to produce parts in a wide range
                of sizes and complexity. Small features, intricate geometries, and thin
                walls can be easily achieved using this process. Components can undergo
                post-processing with various surface finishing options like painting and texturing.
              </p>
              {/* Request a Quote Button */}
              <Button
                variant="primary"
                style={{
                  marginTop: "45px",
                  fontSize: "22px",
                  backgroundColor: "orangered", // Orange-red background color
                  borderColor: "orangered", // Matching border color
                }}
                onClick={handleQuoteRequest}
              >
                Request a Quote
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="img-box-wrapper">
              <Col md={12}>
                <img src={fabrication} alt="Injection Moulding" />
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProjectDetails;

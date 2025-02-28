import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import fabrication from "../../assets/img/digifactory/service-details/3d-printing.png";

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
              <h3 style={{ fontSize: "50px" }}>3-D Printing Service</h3>
              <br />
              <p style={{ fontSize: "20px", color: "black" }}>
                Materialyz helps companies and entrepreneurs globally manufacture
                prototypes for their businesses. There is no minimum order quantity,
                and businesses can benefit from Materialyz’s design and process expertise,
                along with the ability to scale up production quickly.
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
                <img src={fabrication} alt="Awesome Image" />
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProjectDetails;

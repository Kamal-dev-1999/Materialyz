import React from "react";
import { MediaFeaturesData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";
import { Col, Row } from "react-bootstrap";

const RelatedServices = () => {
  return (
    <section className="service-style-three sec-pad service-details-page">
      <div className="thm-container">
        <div className="sec-title text-center">
          {/* <span>Other services</span> */}
          <h3>Media Features</h3>
          <p>
            Materialyz.com at a global scale
          </p>
        </div>
        <Row className="justify-content-center">
          {MediaFeaturesData.slice(0, 3).map((post, index) => (
            <Col md={6} lg={4} key={index}>
              <ServiceCardTwo data={post} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default RelatedServices;

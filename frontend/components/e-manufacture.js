import React from "react";
import { EMData } from "@/data";
import { Col, Row } from "react-bootstrap";
import AboutCard from "@/components/about-card";

const EManufacture = () => {
  return (
    <section className="about-section sec-pad">
      <div className="thm-container">
        <Row>
          {EMData.map((post, index) => (
            <Col md={12} lg={4} key={index} className="mb-5">
              <AboutCard data={post} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default EManufacture;

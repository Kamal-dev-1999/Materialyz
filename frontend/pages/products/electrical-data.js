import React from "react";
import PostPaginations from "@/components/post-paginations";
import { Col, Row } from "react-bootstrap";
import { ElectricalData } from "@/data";
import ProductCard from "@/components/product-card";

const Electrical = () => {
  return (
    <section className="service-style-three sec-pad">
      <div className="thm-container">
        <Row>
          {ElectricalData.map((post, index) => (
            <Col md={6} lg={3} key={index}>
              <ProductCard data={post} />
            </Col>
          ))}
        </Row>
        <PostPaginations />
      </div>
    </section>
  );
};

export default Electrical;

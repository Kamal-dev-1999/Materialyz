import React from "react";
import PostPaginations from "@/components/post-paginations";
import { Col, Row } from "react-bootstrap";
import { ToolsData } from "@/data";
import ProductCard from "@/components/product-card";

const IndustrialTools = () => {
  return (
    <section className="service-style-three sec-pad">
      <div className="thm-container">
        <Row>
          {ToolsData.map((post, index) => (
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

export default IndustrialTools;

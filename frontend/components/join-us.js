import React from "react";
import { JoinusData } from "@/data";
import SectionTitle from "./section-title";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const Joinus = () => {
  const {
    backgroundImage,
    sectionContent,
    content,
    button,
    phone,
    posts
  } = JoinusData;
  return (
    <section className="service-style-one sec-pad">
      <div className="thm-container">
        <Row>
          <Col lg={12}>
            <div className="service-content" style={{marginTop:"-30px"}}>
              <SectionTitle data={sectionContent}/>
              <p style={{fontWeight:"700", color:"black", fontSize:"25px", marginTop:"-30px"}}>Up-Cycling of Surplus Materials.</p>
              <p>{content}</p>
              {/* <div className="btn-box">
                <Link href={button.url}>
                  <a className="thm-btn yellow-bg">{button.label}</a>
                </Link>
                <div className="phone-btn">
                  <i className="fas fa-phone"></i>
                  {phone}
                </div>
              </div> */}
            </div>
          </Col>
          {/* <Col lg={6}>
            <div className="service-right-content">
              <div className="inner">
                <div className="divider hor"></div>
                <div className="divider ver"></div>
                <Row>
                  {posts.map(({ title, icon, url }, index) => (
                    <Col md={6} key={index}>
                      <div className="single-service-one hvr-bounce-to-bottom">
                        <i className={icon}></i>
                        <Link href={url}>
                          <a>
                            <h3>{title}</h3>
                          </a>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col> */}
        </Row>
      </div>
    </section>
  );
};

export default Joinus;

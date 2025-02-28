import React from "react";
import serviceTwo1 from "@/images/what-we-do-1-1.jpg";
const ServiceTwo = () => {
  return (
    <section className="what-we-do sec-pad">
      <div className="thm-container">
        <div className="sec-title text-center">
          {/* <span>Our features</span> */}
          <h3>Why materialyz?</h3>
          <p>
            There are many variations of passages of lorem Ipsum available, but{" "}
            <br /> the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="row">
          {/* <div className="col-lg-6 col-md-12">
            <div className="single-what-we-do">
              <div className="img-box">
                <img src={serviceTwo1} alt="" />
              </div>
              <div className="text-box hvr-bounce-to-bottom">
                <a href="/service-details">
                  <h3>3D Printing</h3>
                </a>
                <p>
                  There are many people variation of passages of lorem Ipsum
                  available in the majority have suffer alteration in some.
                </p>
                <a
                  href="/service-details"
                  className="read-more fas fa-angle-right"
                ></a>
              </div>
            </div>
          </div> */}
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-what-we-do-one hvr-bounce-to-bottom" style={{minHeight: '250px', height: '100%'}}>
                  <i className="printify-icon-paper-drill"></i>
                  <a href="/service-details">
                    <h3 style={{fontSize:"25px"}}>First Industrial Raw Material Platform</h3>
                  </a>
                  <p>
                    We are proud to be the world's first platform specifically designed for industrial raw materials which offers unparallel marketplace specifically for raw materials.
                  </p>
                  <a
                    href="/service-details"
                    className="read-more fas fa-angle-right"
                  ></a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-what-we-do-one hvr-bounce-to-bottom" style={{minHeight: '250px', height: '100%'}}>
                  <i className="printify-icon-printing-text"></i>
                  <a href="/service-details">
                    <h3 style={{fontSize:"25px"}}>Surplus Material Management</h3>
                  </a>
                  <p>
                    We specialize in the sale and repurposing of surplus, salvage, scrap, damaged and bankrupt.
                  </p>
                  <a
                    href="/service-details"
                    className="read-more fas fa-angle-right"
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-what-we-do-one hvr-bounce-to-bottom" style={{minHeight: '250px', height: '100%'}}>
                  <i className="printify-icon-paper-drill"></i>
                  <a href="/service-details">
                    <h3 style={{fontSize:"25px"}}>Consolidated and Targeted Platform</h3>
                  </a>
                  <p>
                    For manufacturers, Materialyz.com offers a consolidated and targeted platform to directly connect with buyers actively seeking new materials. 
                  </p>
                  <a
                    href="/service-details"
                    className="read-more fas fa-angle-right"
                  ></a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-what-we-do-one hvr-bounce-to-bottom" style={{minHeight: '250px', height: '100%'}}>
                  <i className="printify-icon-printing-text"></i>
                  <a href="/service-details">
                    <h3 style={{fontSize:"25px"}}>Committment to Sustainability</h3>
                  </a>
                  <p>
                    Materialyz.com is not just a platform; it's a movement toward a more sustainable future.
                  </p>
                  <a
                    href="/service-details"
                    className="read-more fas fa-angle-right"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;

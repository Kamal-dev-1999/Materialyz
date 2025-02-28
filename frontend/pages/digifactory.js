import React from "react";
// import ClientCarousel from "@/components/client-carousel";
import Layout from "@/components/layout";
// import ProgressOne from "@/components/progress-one";
// import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
// import AboutOne from "@/components/about-one";
import EM from "@/components/e-manufacture";
// import TestimonialsOne from "@/components/testimonials-one";
// import TeamOne from "@/components/team-one";
// import FaqFeature from "@/components/faq-feature";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import DigifactoryHeader from "@/components/digi-slider";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Digifactory">
        <HeaderOne />
        <DigifactoryHeader />
        <div>
            <h3 class="col-md-11" style={{color:"black", fontSize:"20px", marginLeft:"30px", marginTop:"50px"}}> Materialyz DigiFactory is a cutting-edge platform that integrates extensive manufacturing capabilities with a robust global supply chain to deliver tailored solutions for sourcing, inventory management, quality assurance, and logistics. We prioritize transparency, efficiency, and sustainability, helping manufacturers overcome challenges while minimizing risks. Our innovative upcycling solutions reduce waste and enhance reusability and pave the way for a greener future.</h3>
        </div>
        <div>
            <h3 class="col-md-11" style={{color:"black", fontSize:"30px", fontWeight:"700", marginLeft:"30px", marginTop:"70px", marginBottom:"-80px"}}> E - MANUFACTURING SERVICES</h3>
        </div>
        <EM />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default AboutPage;

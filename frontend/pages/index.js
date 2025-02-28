import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import AboutTwo from "@/components/about-two";
// import ClientCarousel from "@/components/client-carousel";
// import RecentProject from "@/components/recent-project";
// import CallToActionTwo from "@/components/call-to-action-two";
// import CallToActionThree from "@/components/call-to-action-three";
import QC from "@/components/quality-certificate";
import VideoDesignGuide from "@/components/video-design-guide";
import OurServices from "@/components/our-services";
// import FaqFeature from "@/components/faq-feature";
// import TestimonialsOne from "@/components/testimonials-one";
import ServiceTwo from "@/components/service-two";
import HeaderOne from "@/components/header-one";
import SliderOne from "@/components/slider-one";
import MenuContextProvider from "@/context/menu-context";
// import BlogTwo from "@/components/blog-two";
import MediaFeatures from "@/components/media-features";
import Joinus from "@/components/join-us";

const Home = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home Page">
        <HeaderOne />
        <SliderOne />
        <AboutTwo /> {/* What is Materialyz? */}
        <ServiceTwo /> {/* Why materialyz? */}
        <OurServices />
        <QC /> {/* Quality Certification */}
        <MediaFeatures />
        <Joinus />
        <Footer />
        {/* <BlogTwo /> */}
        {/* <VideoDesignGuide /> */}
        {/* <CallToActionThree /> */}
        {/* <RecentProject /> */}
        {/* <ClientCarousel /> */}
        {/* <TestimonialsOne />
        <FaqFeature />
        <CallToActionTwo /> */}
      </Layout>
    </MenuContextProvider>
  );
};

export default Home;

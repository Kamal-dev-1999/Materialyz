import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import ProductHeader from "@/components/product-slider";
import MechanicalData from "../products/mechanical-data";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Product">
        <HeaderOne />
        <ProductHeader />
        <div>
            <h3 class="col-md-11" style={{color:"black", fontSize:"30px", fontWeight:"700", marginLeft:"80px", marginTop:"70px", marginBottom:"-80px"}}>Mechanical</h3>
        </div>
        <MechanicalData />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default AboutPage;

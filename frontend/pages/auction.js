import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import AuctionHeader from "@/components/auction-slider";
import AuctionHolder from "@/components/auction-holder";


const AboutPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Auctions">
        <HeaderOne />
        <AuctionHeader />
        <div>
            <h3 class="col-md-11" style={{color:"black", fontSize:"20px", marginLeft:"30px", marginTop:"50px"}}> Materialyz combines comprehensive manufacturing capabilities with significant production capacity, making us the premier source for getting high-quality metals and materials. Our transparent auction platform connects manufacturers to high-quality industrial materials, rare alloys, and precious metals, expediting the procurement process. Explore our auctions today and secure the materials to power your projects with Materialyz!</h3>
        </div>
        <div>
            <h3 class="col-md-11" style={{color:"black", fontSize:"30px", fontWeight:"700", marginLeft:"30px", marginTop:"70px", marginBottom:"-80px"}}>Live Auctions</h3>
        </div>
        <AuctionHolder />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default AboutPage;

import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import PrintingDetails from "../e-manufacture/3dprinting-details";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header-one";

const ProjectDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">
        <HeaderOne />
        <PageHeader title="3-D Printing Service Services" name="Service Details" />
        <PrintingDetails />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ProjectDetailsPage;

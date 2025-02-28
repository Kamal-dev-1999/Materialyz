import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import FabricationDetails from "../e-manufacture/fabrication-details";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header-one";

const ProjectDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">
        <HeaderOne />
        <PageHeader title="Fabrication Services" name="Service Details" />
        <FabricationDetails />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ProjectDetailsPage;

import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import DesignServiceDetails from "../e-manufacture/designservice-details";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header-one";

const ProjectDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">
        <HeaderOne />
        <PageHeader title="Engineering and Design Service" name="Service Details" />
        <DesignServiceDetails />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ProjectDetailsPage;

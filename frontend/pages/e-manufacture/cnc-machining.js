import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import CNCMachiningDetails from "../e-manufacture/cncmachining-details";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header-one";

const ProjectDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">
        <HeaderOne />
        <PageHeader title="CNC Machining Service" name="Service Details" />
        <CNCMachiningDetails />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ProjectDetailsPage;

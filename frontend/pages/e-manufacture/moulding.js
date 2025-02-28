import React from "react";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import MouldingDetails from "../e-manufacture/moulding-details";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header-one";

const ProjectDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">
        <HeaderOne />
        <PageHeader title="Injection Moulding Service" name="Service Details" />
        <MouldingDetails />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ProjectDetailsPage;

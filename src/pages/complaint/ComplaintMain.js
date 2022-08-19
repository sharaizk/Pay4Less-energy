import React from "react";
import Complaint from "./ComplaintSection";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTop from "../../components/ScrollTop";

const ComplaintMain = () => {
  return (
    <React.Fragment>
      {/* Breadcrumb Start */}
      <Breadcrumb pageTitle="Complaints" />
      {/* Breadcrumb End */}

      {/* Complaint Start */}
      <Complaint />
      <ScrollToTop />
      {/* scrolltop-end */}
    </React.Fragment>
  );
};

export default ComplaintMain;

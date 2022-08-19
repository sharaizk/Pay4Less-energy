import React from "react";
import Header from "../../components/Header/HeaderStyleTwo";
import Footer from "../../components/Footer";
import FaqMain from "./faq-main";
import Logo from "../../assets/images/logos/logo1.png";
import Logo2 from "../../assets/images/logos/logo2.png";


const FAQ = () => {
  return (
    <React.Fragment>
      <Header
        parentMenu="page"
        headerNormalLogo={Logo}
        headerClass="ras-header ras-header-2"
      />
      <FaqMain />
      <Footer footerLogo={Logo2} />
    </React.Fragment>
  );
};

export default FAQ;

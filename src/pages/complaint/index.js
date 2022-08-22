import React from "react";
import Header from "../../components/Header/HeaderStyleTwo";
import Footer from "../../components/Footer";
import CompaintMain from "./ComplaintMain";

// Image
import Logo from "../../assets/images/logos/logo2.png";
import Logo2 from "../../assets/images/logos/logo1.png";

const Compalaint = () => {
  return (
    <React.Fragment>
      <Header
        parentMenu="page"
        headerNormalLogo={Logo2}
        headerClass="ras-header ras-header-2"
      />

      {/* Compalaint Main */}
      <CompaintMain />
      {/* Compalaint Main */}

      <Footer footerLogo={Logo} footerCTA={true} />
    </React.Fragment>
  );
};

export default Compalaint;

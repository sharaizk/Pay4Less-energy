import React from "react";
import Fade from "react-reveal/Fade";
// WhyChooseUs Image
import shapeImg from "../../assets/images/eclipse-rotate-shape.svg";
import logo1 from "../../assets/images/companies/logo1.png";
import logo2 from "../../assets/images/companies/logo2.png";
import logo3 from "../../assets/images/companies/logo3.png";
import logo4 from "../../assets/images/companies/logo4.png";
import logo5 from "../../assets/images/companies/logo5.png";
import logo6 from "../../assets/images/companies/logo6.png";
import logo8 from "../../assets/images/companies/logo8.png";
import logo9 from "../../assets/images/companies/logo9.png";
import logo10 from "../../assets/images/companies/logo10.png";
import logo11 from "../../assets/images/companies/logo11.png";
import logo12 from "../../assets/images/companies/logo12.png";
import logo13 from "../../assets/images/companies/logo13.png";
import logo14 from "../../assets/images/companies/logo14.png";
import logo15 from "../../assets/images/companies/logo15.jpeg";
import logo16 from "../../assets/images/companies/logo16.png";

const WhyChooseUs = () => {
  return (
    <div className="ras-why-choose-us ras-why-choose-us-1 mb-5">
      <img src={shapeImg} alt="eclipse-shape" />
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-5 col-md-12">
            <Fade bottom>
              <h2>
                We work with the top UK Electricity, Gas, and Telecommunication
                Suppliers
              </h2>
            </Fade>
          </div>
          <div className="col-lg-7 col-md-12 brands">
            <Fade bottom cascade>
              <div className="row mb-5">
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "45%" }}
                    src={logo1}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "70%" }}
                    src={logo2}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "50%" }}
                    src={logo3}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "50%" }}
                    src={logo4}
                  />
                </div>
              </div>
              <div className="row mb-5 brands">
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "60%" }}
                    src={logo5}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "50%" }}
                    src={logo6}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "70%" }}
                    src={logo8}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "80%" }}
                    src={logo9}
                  />
                </div>
              </div>

              <div className="row mb-5 brands">
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "60%" }}
                    src={logo10}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "50%" }}
                    src={logo11}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "70%" }}
                    src={logo12}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "30%" }}
                    src={logo13}
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "60%" }}
                    src={logo14}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center col-md-3">
                  <img
                    className="brand-img"
                    style={{ width: "60%" }}
                    src={logo15}
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;

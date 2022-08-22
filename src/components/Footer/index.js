import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import diamondShape from "../../assets/images/diamond-shape.svg";
import curlyShape from "../../assets/images/curly-shape.svg";
import bannerDots from "../../assets/images/banner-dots-1.svg";
import triangle from "../../assets/images/triangle.svg";

import Logo from "../../assets/images/logos/logo2.png";

const Footer = (props) => {
  const { footerLogo, footerClass, footerCTA } = props;
  return (
    <footer className={footerClass ? footerClass : "ras-footer ras-footer-1"}>
      <div className="container">
        {footerCTA ? (
          <div className="row">
            <div className="col-lg-12">
              <Fade bottom>
                <div className="ras-calltoaction">
                  <h2>
                    If you have any project or query for us <br />{" "}
                    <b> Please contact us</b>
                  </h2>
                  <Link to="/contact" className="btn btn-primary btn-large">
                    Contact Us!
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        ) : (
          ""
        )}

        <Fade left cascade>
          <div className="row">
            <div className="col-lg-5 col-md-12 ras-widget-about">
              <div className="ras-about-logo">
                <Link to="/">
                  <img src={footerLogo ? footerLogo : Logo} alt="Footer Logo" />
                </Link>
              </div>

              <div className="ras-about-address">
                <p className="mb-0">
                  Address: Kilroy House, 400 Roding Lane South Woodford, London,
                  Essex, England, IG8 8EY
                </p>
                <p>
                  Phone: <a href="tel:+000-1234-678">02085506625</a>
                  <span className="email">
                    Email:{" "}
                    <a href="mailto:info@pay4lessenergyltd.co.uk">
                      info@pay4lessenergyltd.co.uk
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 ras-widget-links">
              <h3 className="ras-widget-title">Quick Links</h3>
              <ul>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/complaints-handling-procedure">
                    Complaints Handling Procedure
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 ras-widget-subscribe">
              <h3 className="ras-widget-title">P4L</h3>
              <p>
                At PAY 4 LESS ENERGY, we're experts in energy procurement, and
                we're here to help your business succeed.
              </p>
            </div>
          </div>
        </Fade>

        <div className="ras-copyright mt-60">
          <div className="row ras-copyright-wrapper relative">
            <Fade bottom>
              <div className="col-md-6 text-lg-center">
                <p className="copyright-text mb-0">
                  © 2021 All Right Reserved, <Link to="/">Pay4Less</Link>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="ras-footer-shapes">
        <img src={diamondShape} alt="Diamond Shape" className="diamond-shape" />
        <img src={triangle} alt="Traingle Shape" className="triangle-shape" />
        <img src={curlyShape} alt="Curly shape" className="curly-shape" />
        <img src={bannerDots} alt="Dot Shape" className="square-dots-1" />
      </div>
    </footer>
  );
};

export default Footer;

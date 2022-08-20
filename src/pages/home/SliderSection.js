import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import diamondShape from "../../assets/images/diamond-shape.svg";
import curlyShape from "../../assets/images/curly-shape.svg";
import bannerDots1 from "../../assets/images/banner-dots-1.svg";
import bannerDots2 from "../../assets/images/banner-dots-2.svg";

const HomeSlider = () => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    margin: 0,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="ras-banner ras-banner-1">
        <div className="slider-active text-center">
          <Slider {...sliderSettings}>
            <div className="ras-slide">
              <div className="container">
                <div className="ras-slide-content">
                  <h3 className="ras-slide-sub-heading text-white">
                    Pay 4 Less
                  </h3>
                  <h2 className="ras-slide-heading text-white">
                    The Smarter Way to Save
                  </h2>
                  <p className="ras-slide-desc text-white mb-50">
                    At PAY 4 LESS ENERGY, we're experts in energy procurement,
                    and we're here to help your business succeed. We work with
                    businesses of all sizes throughout the UK, and we're trusted
                    by thousands of clients to deliver tailored energy
                    solutions.
                  </p>
                  <Link
                    to="/contact"
                    className="btn btn-primary btn-large hero-btn"
                  >
                    Start Your Journey
                    <i className="icofont-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="ras-banner-shapes">
          <img
            src={diamondShape}
            alt="banner-diamond-shape"
            className="banner-diamond-shape"
          />
          <img
            src={curlyShape}
            alt="banner-curve-shape"
            className="banner-curly-shape"
          />
          <img
            src={bannerDots1}
            alt="banner-dots-1"
            className="banner-square-dots-1"
          />
          <img
            src={bannerDots2}
            alt="banner-dots-2"
            className="banner-square-dots-2"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeSlider;

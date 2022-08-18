import React, { Component } from "react";
import Feature from "./FeatureSection";
import Service from "./ServiceSection";
import HomeSlider from "./SliderSection";
import VideoSection from "./VideoSection";
import WhyChooseUs from "./WhyChooseUsSection";
import ScrollToTop from "../../components/ScrollTop";

class HomeMain extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ras-main-content">
          <HomeSlider />
          <VideoSection />
          <Service />
          <Feature />
          <WhyChooseUs />
          <ScrollToTop scrollClassName="scrollup orange-color" />
        </div>
      </React.Fragment>
    );
  }
}

export default HomeMain;

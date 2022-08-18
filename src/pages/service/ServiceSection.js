import React from "react";
import Fade from "react-reveal/Fade";
import SingleService from "../../components/Service/SingleService";

import serviceShape from "../../assets/images/eclips-shape-1.svg";

const Service = () => {
  return (
    <div className="ras-services ras-services-1 sec-spacer">
      <img src={serviceShape} alt="service1-bg" className="ras-services-1-bg" />
      <div className="container">
        <Fade bottom>
          <h2 className="mb-50 md-mb-30 text-center">
            We’ve helped hundreds
            <br /> of clients to reach internet & grow
            <br /> <span class="color-title">their Business</span>
          </h2>
        </Fade>
        <div className="row">
          <div className="col-lg-8">
            <Fade bottom>
              <SingleService
                itemClass="ras-services-item fadeInLeft"
                IconClass="ras-service-icon purple-bg-icon"
                BtnClass="read-more bg-purple"
                Icon="flaticon-web-programming"
                Title="Web Developmnt"
                Desc="According to elite we providing web Development
                                services to our honorable clients for business."
              />
            </Fade>
          </div>
          <div className="col-lg-4">
            <Fade bottom>P</Fade>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Fade bottom>P</Fade>
          </div>
          <div className="col-lg-8">
            <Fade bottom>
              <SingleService
                itemClass="ras-services-item fadeInLeft"
                IconClass="ras-service-icon purple-bg-icon"
                BtnClass="read-more bg-purple"
                Icon="flaticon-web-programming"
                Title="Web Developmnt"
                Desc="According to elite we providing web Development
                                services to our honorable clients for business."
              />
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <Fade bottom>
              <SingleService
                itemClass="ras-services-item fadeInLeft"
                IconClass="ras-service-icon purple-bg-icon"
                BtnClass="read-more bg-purple"
                Icon="flaticon-web-programming"
                Title="Web Developmnt"
                Desc="According to elite we providing web Development
                                services to our honorable clients for business."
              />
            </Fade>
          </div>
          <div className="col-lg-4">
            <Fade bottom>P</Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

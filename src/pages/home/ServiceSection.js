import React from "react";
import Fade from "react-reveal/Fade";

import SingleService from "../../components/Service/SingleService";

import serviceShape from "../../assets/images/eclips-shape-1.svg";

const Service = () => {
  return (
    <div className="ras-services ras-services-1 ras-service-1-spacer-bottom">
      <img src={serviceShape} alt="service1-bg" className="ras-services-1-bg" />
      <div className="container">
        <Fade bottom>
          <h2 className="mb-50 text-center">
            With our help, you can focus on what you do best and leave the
            energy procurement to us.
          </h2>
        </Fade>
        <Fade left cascade>
          <div className="row">
            <div className="col-lg-4">
              <SingleService
                itemClass="ras-services-item"
                icon="pepicons:electricity"
                Title="Electric"
                Desc="Our energy experts understand that not every business is the same, so we tailor our electricity price comparisons to your business needs."
                showNav={true}
              />
            </div>
            <div className="col-lg-4">
              <SingleService
                itemClass="ras-services-item"
                icon="la:burn"
                Title="Gas"
                Desc="At our company, we have a team of energy experts. Their job is to compare energy prices and help get your business the best deal possible on gas supply."
                showNav={true}
              />
            </div>
            <div className="col-lg-4">
              <SingleService
                itemClass="ras-services-item"
                icon="maki:communications-tower"
                Title="Telecommunication"
                Desc="Connecting people is our work and we are doing it better than anyone. We combine cutting-edge technology with an exceptional customer service"
                showNav={true}
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Service;

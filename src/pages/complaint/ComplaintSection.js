import React from "react";
import Fade from "react-reveal/Fade";
import SingleService from "../../components/Service/SingleService";

import serviceShape from "../../assets/images/eclips-shape-1.svg";

const Complaint = () => {
  return (
    <div className="ras-services ras-services-1 sec-spacer">
      <img src={serviceShape} alt="service1-bg" className="ras-services-1-bg" />
      <div className="container">
        <Fade bottom>
          <h2 className="mb-50 md-mb-30 text-center">
            Complaint handling <span class="color-title">Procedure</span>
          </h2>
        </Fade>
        <Fade bottom>
          <div className="row mb-4">
            <div className="col-lg-12">Complaints Handling Procedures</div>
            <div className="col-lg-12">
              Our goal is to provide our customers with a fantastic experience.
              However, we are aware that unfortunate events might occur
              sometimes, and we work to make sure that they are immediately
              rectified.
              <br />
              All of our clients receive the best service possible from Stealth
              Energy. Please contact us if you have any issues or believe that
              our service fell short of your expectations. This will help us
              keep up with enhancing the service we provide to you
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="row mb-4">
            <div className="col-lg-12">Complaints Handling Procedures</div>
            <div className="col-lg-12">
              Our goal is to provide our customers with a fantastic experience.
              However, we are aware that unfortunate events might occur
              sometimes, and we work to make sure that they are immediately
              rectified.
              <br />
              All of our clients receive the best service possible from Stealth
              Energy. Please contact us if you have any issues or believe that
              our service fell short of your expectations. This will help us
              keep up with enhancing the service we provide to you
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Complaint;

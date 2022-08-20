import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import ProgressBarCircle from "../../components/Progress/ProgressCircle";

import successImg from "../../assets/images/success-story/success-1.jpg";

const Faq = () => {
  return (
    <div className="ras-about ras-success-faq sm-pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="ras-success-story">
              <h2>
                We deal in all
                <span className="color-title"> business sectors.</span>
              </h2>
              <p>
                No matter the size, sector, or complexity of the utilities
                problem, as a company, we have the strategic insight and
                technical know-how to handle it. Recognizing the necessity to
                always innovate in order to stay on top of things as utility
                bills rise. Delivering effective utilities management strategies
                depends equally on what you do internally and outside. We are
                extremely strong and skilled in a variety of sectors.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <Fade right>
              <div className="ras-success-story-image">
                <img src={successImg} alt="Our Success Story" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

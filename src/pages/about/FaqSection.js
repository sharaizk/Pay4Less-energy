import React from "react";
import Fade from "react-reveal/Fade";

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
                <img src={"https://img.freepik.com/free-photo/no-people-desk-with-multiple-computers-call-center-office-used-by-telemarketing-agents-answer-phone-calls-helpline-empty-space-with-technology-give-assistance-customer-care_482257-40793.jpg?w=2000&t=st=1661173432~exp=1661174032~hmac=113d0d60f3f0fd40f7d010e7848a8a2938e56d927cf149458d349284a69d16bc"} alt="Our Success Story" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

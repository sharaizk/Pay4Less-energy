import React from 'react';
import Fade from 'react-reveal/Fade';

const WhyChooseUs = () => {

    return (
      <div className="ras-about-choose-us ras-why-choose-us-2">
        <div className="container">
          <Fade bottom>
            <h2 className="text-center mb-50">
              Some special reson of Why
              <br />
              clients Choice Us
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="choose-us-item">
                  <div className="choose-us-icon purple-bg-icon">
                    <i className="flaticon-man"></i>
                  </div>
                  <div className="choose-us-details">
                    <h3>Talented team</h3>
                    <p>
                      At our company, we have team of individuals who are
                      passionate about giving the best service possible. You can
                      rest assured that with our team, your business needs will
                      be taken care of in a prompt and professional manner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="choose-us-item">
                  <div className="choose-us-icon orange-bg-icon">
                    <i className="flaticon-checked"></i>
                  </div>
                  <div className="choose-us-details">
                    <h3>Safe & Sceure</h3>
                    <p>
                      Your data is important to us, and we work hard to protect
                      it. We have measures in place to keep your information
                      safe, and we regularly update our systems to make sure
                      that your data is always secure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="choose-us-item">
                  <div className="choose-us-icon red-bg-icon">
                    <i className="flaticon-chat"></i>
                  </div>
                  <div className="choose-us-details">
                    <h3>Online Support</h3>
                    <p>
                      At our company, we want to ensure that you have the best
                      customer support possible. We are available to you
                      whenever you need us. You can contact us via email and
                      telephone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
}

export default WhyChooseUs;
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

// Categories Image
import featureImg from '../../assets/images/about/about.jpg';

const Feature = () => {

    return (
      <div className="ras-features ras-features-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade Left>
                <div className="ras-features-image">
                  <img src={featureImg} alt="our-features" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade right>
                <div className="ras-features-details">
                  <h2>
                    <span class="color-title">Our Mission </span>
                  </h2>
                  <p>
                    At Pay4less, we go above and beyond to get our clients the
                    best possible savings on utilities and telecommunications.
                    We're one of the UK's leading independent consultancies, and
                    we're proud to say that we always put our clients first.
                  </p>
                  <Fade bottom cascade>
                    <div className="row features-items-wrapper">
                      <div className="col-md-6">
                        <div className="features-item">
                          <div className="features-icon orange-bg-icon">
                            <i className="flaticon-smiling-girl"></i>
                          </div>
                          <div className="features-content">
                            <h5>Happy Clients</h5>
                            <p>5K+ Happy Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="features-btn">
                      <Link to="/contact" className="btn btn-large btn-primary">
                        Contact Us
                      </Link>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="ras-blur-background"></div>
      </div>
    );
}

export default Feature;
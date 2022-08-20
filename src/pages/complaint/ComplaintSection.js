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
            <div className="col-lg-12">
              At Pay4less we are dedicated to providing a professional and
              comprehensive service to all of our customers. However, we
              understand that there may be times when we fail to meet your
              expectations. If you are unhappy with our service for any reason,
              please do not hesitate to contact us. We take all complaints very
              seriously and will investigate the matter thoroughly in order to
              provide a quick and satisfactory resolution. We are constantly
              striving to improve our business practices and will use any
              feedback, positive or negative, to help us learn and grow.
              <br />
              All complaints will be handled in the following stages:
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="row mb-4">
            <div className="col-lg-12">
              <b>Stage 1:</b>
            </div>
            <div className="col-lg-12">
              As soon as we receive your complaint, we will begin to investigate
              it. We may ask for additional information or clarification to help
              us understand the situation better. If you wish to make a
              complaint, please contact us on:
              <br />
              <b>Phone:</b>
              <br />
              <b>Email:</b>
              <br />
              <b>Post:</b>
              <br />
              <b>Online:</b>
              <br />
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="row mb-4">
            <div className="col-lg-12">
              <b>Stage 2:</b>
            </div>
            <div className="col-lg-12">
              We will look into the issues you have raised.
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="row mb-4">
            <div className="col-lg-12">
              <b>Stage 3:</b>
            </div>
            <div className="col-lg-12">
              Our goal is to resolve your complaint within 3 working days, if we
              have all the information we need. However, if we aren't able to
              finish our investigation by then, we'll let you know what our
              progress is. We will update you on our progress every 7 days.
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="row mb-4">
            <div className="col-lg-12">
              <b>Stage 4:</b>
            </div>
            <div className="col-lg-12">
              We will write to you within 8 weeks of your initial complaint to
              update you on the investigation's progress and to propose a
              resolution to the problem
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="row mb-4">
            <div className="col-lg-12">
              <b>Stage 5:</b>
            </div>
            <div className="col-lg-12">
              We will act promptly on any resolution that is agreed upon.
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="row mb-4">
            <div className="col-lg-12">
              <b>Stage 6:</b>
            </div>
            <div className="col-lg-12">
              <p>
                Sometimes, even when both parties are working hard to come to an
                agreement, it just doesn't happen. If Pay4less reaches this
                point with you, we'll let you know in writing with a deadlock
                letter
              </p>
              <br />
              <p>
                If both parties reach to the stage 6 or the complaint has been
                in progress for more than 8 weeks and we (Pay4less) are unable
                to resolve the complaint then the complaint may be referred to
                the Ombudsman Services (Energy). This body is approved by OFGEM.
                If you are dissatisfied with our response and wish to take the
                matter further, you will need to contact the Ombudsman. The
                Ombudsman Scheme is free and impartial. Pay4less provides a
                resolution and determination service in case we and our customer
                cannot come to a resolution through our customer complaint
                procedure then the service of <b>Ombudsman Services (Energy)</b>
                is available to our customers so that they can have their voices
                heard and a resolution can be reached.
              </p>
              <p>
                You can contact the Ombudsman either by post, email, letter or
                complete the form online.
              </p>
              <p>
                <b>Telephone:</b> 0330 440 1624
              </p>
              <p>
                <b>Email: </b>
                <a href="mailto:consumeraffairs@ofgem.gov.uk">
                  consumeraffairs@ofgem.gov.uk
                </a>
              </p>
              <p>
                <b>Post: </b>
                Ombudsman Services Energy, PO Box, Warrington, WA4 9DF
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Complaint;

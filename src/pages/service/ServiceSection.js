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
            <br /> of clients to grow
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
                icon="pepicons:electricity"
                Title="Business Electricity - We Compare Electricity Prices for You"
                Desc="Every business has to use electricity, thus at Pay4less we compare electricity prices for you. We concentrate in negotiating rates for both large and small businesses and compare electricity prices. It all comes down to our fantastic connections with all Uk suppliers and our superb comprehension of our customers' demands. Our large staff of energy specialists compares the costs of electricity from more than 10 suppliers and makes it their regular duty to negotiate for low pricing for our customers."
              />
            </Fade>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <Fade bottom>
              <img
                className="rounded-2"
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="electric"
              />
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <Fade bottom>
              <img
                style={{ width: "100% !important" }}
                className="rounded-2"
                src="https://images.unsplash.com/photo-1539186607619-df476afe6ff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="electric"
              />
            </Fade>
          </div>
          <div className="col-lg-8">
            <Fade bottom>
              <SingleService
                itemClass="ras-services-item fadeInLeft"
                IconClass="ras-service-icon purple-bg-icon"
                BtnClass="read-more bg-purple"
                icon="la:burn"
                Title="Business Gas - We Compare Energy Prices for You"
                Desc="Pay4less does more than simply compare gas prices. We take pleasure in offering a complete, personalized, and smooth service when it comes to helping our customers transfer commercial gas suppliers. While switching supplier online could seem quick and simple, but it's crucial to go directly to the supplier when it comes to gas for your business in order to get the most affordable rates. However, calling and haggling with suppliers might take a lot of time if you want to evaluate the gas costs offered by various suppliers. Luckily, it’s our job to do all the hard work and compare gas prices for you. "
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
                icon="maki:communications-tower"
                Title="Business Telecoms and Connectivity"
                Desc="Keep your business telecoms ahead of the curve, with Pay4less your business will benefit from competitive pricing without compromising on quality or service. Our aim is to enable you to make the best use of your telecoms network and reduce costs. We provide a superior range of products from the UK’s leading networks. Our customers get quality services without the hassle of managing their service directly with the network."
              />
            </Fade>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <Fade bottom>
              <img
                style={{ width: "100% !important" }}
                className="rounded-2"
                src="https://images.unsplash.com/photo-1528845922818-cc5462be9a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt="electric"
              />
            </Fade>
          </div>
        </div>
        <p>
          <b>
            We may receive a commission from the supplier once the sale is
            completed and on supply. This is built in via an uplift added to
            your final unit price and paid to us by the supplier
          </b>
        </p>
      </div>
    </div>
  );
};

export default Service;

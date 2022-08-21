import React from 'react';
import Fade from 'react-reveal/Fade';

const ContactInfo = (props) => {
    const { contactBoxClass } = props;
    return (
      <div
        className={contactBoxClass ? contactBoxClass : "ras-contact-address"}
      >
        <Fade left>
          <h2>GET IN TOUCH</h2>
          <p>
            Lorem ipsum dolor seat ameat dui hambes duitag istu leling too
            consecteture more be elite adipaiscing. According to contact with us
            you can easilly co- contact with us.
          </p>

          <h6 className="mb-0">Address:</h6>
          <p className="mb-10">
            Kilroy House, 400 Roding Lane South Woodford, London, Essex,
            England, IG8 8EY
          </p>
          <h6 className="mb-0">Email:</h6>
          <a className="mb-10" href="mailto:info@pay4lessenergyltd.co.uk">
            info@pay4lessenergyltd.co.uk
          </a>
          <h6 className="mb-0">Phone:</h6>
          <p className="mb-10">02085506625</p>
        </Fade>
      </div>
    );

}

export default ContactInfo;
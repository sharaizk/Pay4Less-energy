import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Fade from "react-reveal/Fade";

import videoIcon from "../../assets/images/video/video-img.jpg";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className="ras-video">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="yzCkM5MRaaI"
        onClose={() => {
          openModal();
        }}
      />
      <h2 className="sr-only">Video</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Fade bottom>
              <div className="ras-video-container">
                <img
                  src={
                    "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
                  }
                  alt="Banner Video"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

import React from "react";
import bannerImage from "../../../public/img/banner/man.png";
const Activities = () => {
  return (
    <div className="latest_activites_area mt-100">
      <div
        className="video_activite  d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <a
          className="popup-video"
          href="https://www.youtube.com/watch?v=MG3jGHnBVQs"
        >
          <i className="flaticon-ui"></i>
        </a>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <div className="activites_info">
              <div className="section_title">
                <h3>
                  {" "}
                  <span>Watch Our Latest </span>
                  <br />
                  Activities
                </h3>
              </div>
              <p className="para_1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua. enim
                minim veniam, quis nostrud exercitation.
              </p>
              <p className="para_2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua. enim
                minim veniam, quis nostrud exercitation. tempor incididunt ut
                labore dolore magna aliqua. enim minim veniam, quis nostrud
                exercitation.
              </p>
              <a href="#" data-scroll-nav="1" className="boxed-btn4">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;

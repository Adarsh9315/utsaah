import React from "react";
import bannerImage from "../../img/banner/banner2.jpg";
const Slider = () => {
  return (
    <div className="slider_area">
      <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2"
      style={{ backgroundImage: `url(${bannerImage.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="slider_text ">
                <span>Be Their Hope Today.</span>
                <h3> Your Support, Their Hope.</h3>
                <p>
                  Your support can be the light in someone&apos;s darkest
                  battle. Every day, cancer patients face unimaginable
                  challenges, and your kindness can offer them hope, strength,
                  and the courage to keep fighting. Together, we can ensure that
                  no one faces this journey alone. Join us today and make a
                  lasting impact on the lives of those who need it most.
                </p>
                <a href="About.html" className="boxed-btn3">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

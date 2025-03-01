"use client";
import React from "react";
import bradcam from "../../../img/banner/bradcam.png";
const ContactusTemplate = () => {
     
      
  return (
    <div>
      <div
        className="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bradcam.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>Get in touch</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-section">
      <div className="container">
        {/* <div className="d-none d-sm-block mb-5 pb-4">
          <div id="map" style={{ height: "480px", position: "relative", overflow: "hidden" }}></div>
        </div> */}

        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form
              className="form-contact contact_form"
              action="/contact_process" // Adjust this according to your backend API route
              method="post"
              id="contactForm"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={9}
                      onFocus={() => (this.placeholder = "")}
                      onBlur={() => (this.placeholder = "Enter Message")}
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="name"
                      id="name"
                      type="text"
                      onFocus={() => (this.placeholder = "")}
                      onBlur={() => (this.placeholder = "Enter your name")}
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      onFocus={() => (this.placeholder = "")}
                      onBlur={() => (this.placeholder = "Enter email address")}
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      onFocus={() => (this.placeholder = "")}
                      onBlur={() => (this.placeholder = "Enter Subject")}
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm boxed-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home"></i>
              </span>
              <div className="media-body">
                <h3>Parel, Mumbai, 400012</h3>
                <p>4/19, Kondaji Chawl, V.L.Pednekar Marg, Near Tata Memorial Hospital</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet"></i>
              </span>
              <div className="media-body">
                <h3>+91 9136255955</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email"></i>
              </span>
              <div className="media-body">
                <h3>contact@utsaahfoundation.org</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactusTemplate;

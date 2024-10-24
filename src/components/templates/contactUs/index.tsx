"use client";
import React, { useState } from 'react';
import bradcam from "../../../../public/img/banner/bradcam.png";

const ContactusTemplate = () => {
  const [messagePlaceholder, setMessagePlaceholder] = useState('Enter Message');
  const [namePlaceholder, setNamePlaceholder] = useState('Enter your name');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Enter email address');
  const [subjectPlaceholder, setSubjectPlaceholder] = useState('Enter Subject');

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
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form className="form-contact contact_form" action="/contact_process" method="post" id="contactForm">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols={30}
                        rows={9}
                        placeholder={messagePlaceholder}
                        onFocus={() => setMessagePlaceholder('')}
                        onBlur={() => setMessagePlaceholder('Enter Message')}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        placeholder={namePlaceholder}
                        onFocus={() => setNamePlaceholder('')}
                        onBlur={() => setNamePlaceholder('Enter your name')}
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
                        placeholder={emailPlaceholder}
                        onFocus={() => setEmailPlaceholder('')}
                        onBlur={() => setEmailPlaceholder('Enter email address')}
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
                        placeholder={subjectPlaceholder}
                        onFocus={() => setSubjectPlaceholder('')}
                        onBlur={() => setSubjectPlaceholder('Enter Subject')}
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
              {/* Contact info */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactusTemplate;

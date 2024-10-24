import React from "react";
import Image from "next/image";
import causes1 from "../../../../public/img/causes/1.png";
import causes2 from "../../../../public/img/causes/2.png";
import causes3 from "../../../../public/img/causes/3.png";
import causes4 from "../../../../public/img/causes/4.png";
import causes5 from "../../../../public/img/causes/5.png";
import causes6 from "../../../../public/img/causes/6.png";
import bradcam from "../../../../public/img/banner/bradcam.png";

const CauseTemplate = () => {
  return (
    <div>
      {" "}
      <div
        className="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bradcam.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>Causes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular_causes_area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_cause">
                <div className="thumb">
                  <Image src={causes1} alt="Finance Cause" />
                </div>
                <div className="causes_content">
                  <div className="custom_progress_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "45%" }}
                        aria-valuenow={45}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span className="progres_count">45%</span>
                      </div>
                    </div>
                  </div>
                  <div className="balance d-flex justify-content-between align-items-center">
                    <span>Raised: ₹3,00,000</span>
                    <span>Goal: ₹6,50,000</span>
                  </div>
                  <a href="cause_details.html">
                    <h4>Support Cancer Patients Financially</h4>
                  </a>
                  <p>
                    Your donation can help ease the financial burden for cancer patients. Many families struggle to cover treatment costs, medications, and hospital stays.
                  </p>
                  <a className="read_more" href="cause_details.html">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_cause">
                <div className="thumb">
                  <Image src={causes2} alt="Ration Cause" />
                </div>
                <div className="causes_content">
                  <div className="custom_progress_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span className="progres_count">65%</span>
                      </div>
                    </div>
                  </div>
                  <div className="balance d-flex justify-content-between align-items-center">
                    <span>Raised: ₹4,00,000</span>
                    <span>Goal: ₹6,00,000</span>
                  </div>
                  <a href="cause_details.html">
                    <h4>Provide Essential Food Supplies</h4>
                  </a>
                  <p>
                    Hunger should never be a barrier to recovery. Your contribution helps provide essential food and nutrition to patients and their families.
                  </p>
                  <a className="read_more" href="cause_details.html">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single_cause">
                <div className="thumb">
                  <Image src={causes3} alt="Blood & Platelets Cause" />
                </div>
                <div className="causes_content">
                  <div className="custom_progress_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span className="progres_count">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="balance d-flex justify-content-between align-items-center">
                    <span>Raised: ₹5,50,000</span>
                    <span>Goal: ₹7,00,000</span>
                  </div>
                  <a href="cause_details.html">
                    <h4>Donate Blood & Platelets, Save Lives</h4>
                  </a>
                  <p>
                    Cancer treatments often require life-saving blood and platelets. Your generous support will ensure a steady supply for those undergoing critical therapies.
                  </p>
                  <a className="read_more" href="cause_details.html">Read More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div data-scroll-index="1" className="make_donation_area section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb-55">
                <h3>
                  <span>Make a Donation</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form action="#" className="donation_form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="single_amount">
                      <div className="input_field">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="40,200"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="single_amount">
                      <div className="fixed_donat d-flex align-items-center justify-content-between">
                        <div className="select_prise">
                          <h4>Select Amount:</h4>
                        </div>
                        <div className="single_doonate">
                          <input
                            type="radio"
                            id="blns_1"
                            name="radio-group"
                            checked
                          />
                          <label htmlFor="blns_1">10</label>
                        </div>
                        <div className="single_doonate">
                          <input
                            type="radio"
                            id="blns_2"
                            name="radio-group"
                            checked
                          />
                          <label htmlFor="blns_2">30</label>
                        </div>
                        <div className="single_doonate">
                          <input
                            type="radio"
                            id="Other"
                            name="radio-group"
                            checked
                          />
                          <label htmlFor="Other">Other</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="donate_now_btn text-center">
                <a href="#" className="boxed-btn4">
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseTemplate;

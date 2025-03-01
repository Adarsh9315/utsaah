import React from "react";
import bradcam from "../../../img/banner/bradcam.png";

const AboutTemplate = () => {
  return (
    <div>
      {/* Bradcam Area */}
      <div
        className="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bradcam.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>About Utsaah</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Causes Area */}
      <div className="popular_causes_area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h3>
                  <span>Utsaah Foundation</span>
                </h3>
              </div>

              <div className="section_content">
                <div className="quote_section text-center">
                  <blockquote className="quote_text">
                    <p>
                      <em>
                        "Strive constantly to serve the welfare of the world; by devotion to
                        selfless work, one attains the supreme goal of life"
                      </em>
                    </p>
                    <footer>
                      <strong>– BHAGAVAD GITA</strong>
                    </footer>
                  </blockquote>
                </div>

                <p>
                  Cancer touches every life. It affects the young and old, rich
                  and poor, men, women, and children alike. This devastating
                  disease places an immense burden on patients, their families,
                  and society. As one of the leading causes of death globally,
                  cancer not only brings physical challenges but also emotional
                  and financial strains. From the moment of diagnosis, patients
                  and their families face a whirlwind of concerns, including
                  understanding treatment options, securing finances, arranging
                  accommodations, and navigating the complexities of care
                  throughout their cancer journey.
                </p>
              </div>

              {/* About Us Section */}
              <div className="section_content">
                {/* <h4>About Us</h4> */}
                <p>
                  Established in 2015, Utsaah Foundation was created to be a
                  pillar of support for cancer patients undergoing treatment at
                  Tata Memorial Hospital and other medical institutions. Our
                  foundation focuses on connecting patients with essential
                  resources to manage their treatment and daily lives with
                  dignity and ease.
                </p>
                <p>
                  What sets Utsaah apart is our team of cancer survivors—brave
                  individuals who have triumphed over their battles with cancer
                  and now offer their support to others. These survivors stand
                  by current patients as companions and motivators, sharing
                  their journeys and providing inspiration. Our goal is to
                  ensure that every obstacle a patient or their family faces is
                  addressed, from emotional support to financial assistance and
                  resource allocation.
                </p>
                <p>
                  Since our inception, Utsaah Foundation has served over 13,000
                  patients by providing food supplies, diagnostics, financial
                  aid, and emergency support. To date, we have facilitated over
                  ₹6.07 crores in funds to assist with patient treatment.
                </p>
              </div>

              {/* Mission Section */}
              <div className="section_content mission_section">
                <div className="section_title text-center">
                  <h3>
                    <span>Our Mission</span>
                  </h3>
                </div>
                <p className="mission_intro">
                  At <strong>Utsaah Foundation</strong>, we are driven by the belief that no
                  one should fight cancer alone. Our mission is to stand as a beacon of hope,
                  compassion, and support for every patient and family affected by this
                  life-altering illness.
                </p>
                <div className="mission_goals">
                  <ul className="styled_list">
                    <li>
                      <strong>Raise Awareness:</strong> We educate and guide patients and
                      their families about the wide array of resources available to assist
                      them through their cancer journey. We believe knowledge is power, and
                      our goal is to empower families with the right information to access
                      support networks, treatment options, and community aid.
                    </li>
                    <li>
                      <strong>Alleviate Financial Burdens:</strong> Cancer treatment can be
                      financially overwhelming. Our foundation is committed to helping
                      patients secure the maximum financial assistance possible, allowing them
                      to focus on healing without the added stress of medical expenses.
                    </li>
                    <li>
                      <strong>Empowerment Through Support:</strong> We encourage patients and
                      caregivers to take control of their treatment journey by providing
                      emotional strength and personalized guidance every step of the way. Our
                      survivor network offers firsthand inspiration, helping others stay
                      strong and hopeful.
                    </li>
                    <li>
                      <strong>Cultivating Compassion:</strong> Our foundation fosters an
                      environment of empathy and understanding. We aim to remove the stigma
                      and fear surrounding cancer, replacing it with positivity, hope, and the
                      unwavering belief that survival is possible.
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Make a Donation Area */}
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
                            <span className="input-group-text" id="basic-addon1">
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

export default AboutTemplate;

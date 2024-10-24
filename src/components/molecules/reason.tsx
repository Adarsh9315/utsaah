import React from "react";
import Image from "next/image";
import help1 from "../../img/help/1.png";
import help6 from "../../img/help/6.jpg";
import help7 from "../../img/help/7.webp";
import help8 from "../../img/help/8.webp";
import help10 from "../../img/help/10.webp";
const Reason = () => {
  return (
    <div className="reson_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>Where Your Donation Goes</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  <Image src={help1} alt="help1" objectFit="contain" />
                </div>
              </div>
              <div className="help_content">
                <h4>Financial Guidance</h4>
                <p>
                  Many cancer patients in India are unaware of the available
                  financial support funds. We help connect them to the right
                  resources and assist in completing the necessary forms,
                  ensuring they can secure the maximum funding for their
                  treatment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  <Image src={help7} alt="help7" objectFit="contain" />
                </div>
              </div>
              <div className="help_content">
                <h4>Diagostics</h4>
                <p>
                  Diagnostics make up a significant portion of cancer treatment
                  expenses. We guide patients to trusted diagnostic centers and
                  help them access services at concessional rates, reducing the
                  financial burden on their journey to recovery.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  {/* <img src="img/help/6.jpg" alt="" /> */}
                  <Image src={help6} alt="help6" objectFit="contain" />
                </div>
              </div>
              <div className="help_content">
                <h4>Blood and Platelets Support</h4>
                <p>
                  We assist patients and their families by connecting them with
                  blood donors and nearby blood banks, ensuring timely access to
                  vital blood and platelet resources.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-100">
          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  {/* <img src="img/help/10.webp" alt="" /> */}
                  <Image src={help10} alt="help10" objectFit="contain" />
                </div>
              </div>
              <div className="help_content">
                <h4>Nutrition Support</h4>
                <p>
                  At Utsaah, we provide raw food grains, allowing families to
                  prepare meals as per dieticians&apos; advice, ensuring essential
                  nutrition during cancer treatment while respecting diverse
                  food preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  {/* <img src="img/help/8.webp" alt="" /> */}
                  <Image src={help8} alt="help8" objectFit="contain" />
                </div>
              </div>
              <div className="help_content">
                <h4>Accommodation Support</h4>
                <p>
                  We help cancer patients and their families secure free or
                  subsidized housing near hospitals, ensuring they have a safe
                  place to stay during treatment gaps and don’t have to abandon
                  care due to lack of shelter.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  {/* <img src="img/help/8.webp" alt="" /> */}
                  <Image src={help8} alt="help8" objectFit="contain" />
                </div>
              </div>
              <div className="help_content">
                <h4>Counseling and Emotional Support</h4>
                <p>
                  Emotional support is key to a positive cancer treatment
                  response. Through counseling and support groups, we empower
                  thousands to stay strong and fight cancer with hope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;

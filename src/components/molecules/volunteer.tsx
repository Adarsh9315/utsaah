import React from "react";
import volunteer1 from "../../../public/img/volenteer/Vimalpic.jpg";
import volunteer2 from "../../../public/img/volenteer/Chaulapic.jpg";
import volunteer3 from "../../../public/img/volenteer/maasi.png";
import volunteer4 from "../../../public/img/volenteer/Sanjeevpic.jpg";
import volunteer5 from "../../../public/img/volenteer/Abhirampic.jpg";
import volunteer6 from "../../../public/img/volenteer/Ratanpic.jpg";
import volunteer7 from "../../../public/img/volenteer/kulukumar.jpg";
import volunteer8 from "../../../public/img/volenteer/kulukumar1.jpg";
import Image from "next/image";

const Volunteer = () => {
  return (
    <div className="our_volunteer_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>Our Volunteer</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single_volenteer">
              <div className="volenteer_thumb">
                {/* <img src="img/volenteer/Vimalpic.jpg" alt="" /> */}
                <Image src={volunteer1} alt="volunteer1" objectFit="contain" />
              </div>
              <div className="voolenteer_info d-flex align-items-end">
                <div className="info_inner">
                  <h4>Mr. Vimal Poddar</h4>
                  <p>Founder & Trustee</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_volenteer">
              <div className="volenteer_thumb">
                {/* <img src="img/volenteer/Chaulapic.jpg" alt="" /> */}
                <Image src={volunteer2} alt="volunteer2" objectFit="contain" />
              </div>
              <div className="voolenteer_info d-flex align-items-end">
                <div className="info_inner">
                  <h4>Mrs. Chaula Poddar</h4>
                  <p>Trustee</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_volenteer">
              <div className="volenteer_thumb">
                {/* <img src="img/volenteer/maasi.png" alt="" /> */}
                <Image src={volunteer3} alt="volunteer3" objectFit="contain" />
              </div>
              <div className="voolenteer_info d-flex align-items-end">
                <div className="info_inner">
                  <h4>Mrs. Hema Raja</h4>
                  <p>Volunteer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_volenteer">
              <div className="volenteer_thumb">
                {/* <img src="img/volenteer/Sanjeevpic.jpg" alt="" /> */}
                <Image src={volunteer4} alt="volunteer4" objectFit="contain" />
              </div>
              <div className="voolenteer_info d-flex align-items-end">
                <div className="info_inner">
                  <h4>Mr. Sanjeev Sharma</h4>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_volenteer">
              <div className="volenteer_thumb">
                {/* <img src="img/volenteer/Abhirampic.jpg" alt="" /> */}
                <Image src={volunteer5} alt="volunteer5" objectFit="contain" />
              </div>
              <div className="voolenteer_info d-flex align-items-end">
                <div className="info_inner">
                  <h4>Mr. Abhiram Jha</h4>
                  <p>Volunteer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_volenteer">
              <div className="volenteer_thumb">
                {/* <img src="img/volenteer/Ratanpic.jpg" alt="" /> */}
                <Image src={volunteer6} alt="volunteer6" objectFit="contain" />
              </div>
              <div className="voolenteer_info d-flex align-items-end">
                <div className="info_inner">
                  <h4>Mr. Ratan Dhekale</h4>
                  <p>Volunteer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_volenteer">
              <div className="volenteer_thumb">
                {/* <img src="img/volenteer/kulukumar.jpg" alt="" /> */}
                <Image src={volunteer7} alt="volunteer7" objectFit="contain" />
              </div>
              <div className="voolenteer_info d-flex align-items-end">
                <div className="info_inner">
                  <h4>Mr. Kuku Kumar</h4>
                  <p>Volunteer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_volenteer">
              <div className="volenteer_thumb">
                {/* <img src="img/volenteer/kulukumar1.jpg" alt="" /> */}
                <Image src={volunteer8} alt="volunteer8" objectFit="contain" />
              </div>
              <div className="voolenteer_info d-flex align-items-end">
                <div className="info_inner">
                  <h4>Mr. Mukesh Kumar</h4>
                  <p>Volunteer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;

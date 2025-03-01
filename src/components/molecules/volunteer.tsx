import React from "react";
import Carousel from "../atoms/carousel";
import Image from "next/image";

// Import volunteer images
import volunteer1 from "../../img/volenteer/Vimalpic.jpg";
import volunteer2 from "../../img/volenteer/Chaulapic.jpg";
import volunteer3 from "../../img/volenteer/maasi.png";
import volunteer4 from "../../img/volenteer/Sanjeevpic.jpg";
import volunteer5 from "../../img/volenteer/Abhirampic.jpg";
import volunteer6 from "../../img/volenteer/Ratanpic.jpg";
import volunteer7 from "../../img/volenteer/kulukumar.jpg";
import volunteer8 from "../../img/volenteer/kulukumar1.jpg";

const volunteers = [
  { image: volunteer1, name: "Mr. Vimal Poddar", role: "Founder & Trustee" },
  { image: volunteer2, name: "Mrs. Chaula Poddar", role: "Trustee" },
  { image: volunteer3, name: "Mrs. Hema Raja", role: "Volunteer" },
  { image: volunteer4, name: "Mr. Sanjeev Sharma", role: "CEO" },
  { image: volunteer5, name: "Mr. Abhiram Jha", role: "Volunteer" },
  { image: volunteer6, name: "Mr. Ratan Dhekale", role: "Volunteer" },
  { image: volunteer7, name: "Mr. Kuku Kumar", role: "Volunteer" },
  { image: volunteer8, name: "Mr. Mukesh Kumar", role: "Volunteer" },
];

const Volunteer = () => {
  return (
    <div className="popular_causes_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>Our Volunteers</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Use Carousel Component */}
      <div className="row pl-10 pr-10">
        <div className="col-lg-12">
          <div className="causes_active">
            <Carousel
              slides={volunteers.map((volunteer, index) => (
                <div className="single_volenteer" key={index}>
                  <div className="volenteer_thumb">
                    <Image src={volunteer.image} alt={volunteer.name} objectFit="contain" />
                  </div>
                  <div className="voolenteer_info d-flex align-items-end">
                    <div className="info_inner">
                      <h4>{volunteer.name}</h4>
                      <p>{volunteer.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;

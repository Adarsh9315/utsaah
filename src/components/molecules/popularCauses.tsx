import React from "react";
import Carousel from "../atoms/carousel";
import { EmblaOptionsType } from "embla-carousel";
import { popularCauses } from "../templates/home/data";
const PopularCauses = () => {
  const OPTIONS: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };
  return (
    <div className="popular_causes_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>Popular Causes</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row pl-10 pr-10">
          <div className="col-lg-12">
            <div className="causes_active">
              <Carousel slides={popularCauses} options={OPTIONS} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default PopularCauses;

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "../atoms/carousel";
import { newsAndUpdate } from "../templates/home/data";

const News = () => {
  const OPTIONS: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };
  return (
    <div className="news__area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>News & Updates</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Carousel slides={newsAndUpdate} options={OPTIONS} slideSize="55%"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

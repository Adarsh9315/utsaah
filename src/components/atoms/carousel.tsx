"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  slideSize?: string;
};

const EmblaCarousel: React.FC<PropType> = ({
  slides,
  options,
  slideSize = "35%",
}) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section
      className="embla"
      style={{ "--slide-size": slideSize } as React.CSSProperties}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{slide}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;

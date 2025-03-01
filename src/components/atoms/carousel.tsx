"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides: React.ReactNode[]; // Backend-rendered HTML slides
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  // Default to 1 slide on the server to prevent hydration issues
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const getSlidesToShow = () => {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 5; // Desktop
    };

    setSlidesToShow(getSlidesToShow());

    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false, // Remove snapping
    dragFree: true, // Enable free scrolling
    ...options,
  });

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide"
              key={index}
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              {slide} {/* Render backend HTML content without changes */}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="embla__prev" onClick={() => emblaApi?.scrollPrev()}>
        ◀
      </button>
      <button className="embla__next" onClick={() => emblaApi?.scrollNext()}>
        ▶
      </button>

      {/* Styles */}
      <style jsx>{`
        .embla {
          position: relative;
          max-width: 100%;
          margin: auto;
          overflow: hidden;
        }
        .embla__viewport {
          overflow: hidden;
          width: 100%;
        }
        .embla__container {
          display: flex;
          transition: transform 0.3s ease-in-out;
          will-change: transform;
        }
        .embla__slide {
          min-width: ${isClient ? 100 / slidesToShow : 100}%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 10px;
        }
        .embla__prev, .embla__next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.3);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 50%;
          font-size: 20px;
        }
        .embla__prev {
          left: 10px;
        }
        .embla__next {
          right: 10px;
        }
      `}</style>
    </section>
  );
};

export default EmblaCarousel;

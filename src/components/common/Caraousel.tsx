'use client';

import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import styles from "./Carousel.module.scss";
import { useState } from "react";
import Image from "next/image";

type CarouselProps = {
  slides: string[];
};

function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={`${styles['caraousel-container']}`}>
      <div
        className={`${styles['caraousel']}`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              aspectRatio: "16/9",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            <Image
              src={slide}
              alt={`Slide ${index}`}
              fill
              // style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <div className={`${styles['content']}`}>
        <p>choose the perfect setting for your dream wedding</p>
        <button className={`${styles['cta']}`}>See Acre 31 for Yourself</button>
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
        }}
      >
        <GrFormPrevious />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
}

export default Carousel;
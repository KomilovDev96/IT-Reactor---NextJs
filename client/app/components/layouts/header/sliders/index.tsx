import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ItemsSlider } from "./SliderITems";
function SlidersCustom() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation]}
    >
      {ItemsSlider.map((items) => (
        <SwiperSlide>Slide 1</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlidersCustom;

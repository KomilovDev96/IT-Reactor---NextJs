import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ItemsSlider } from "./SliderITems";
import Image from "next/image";
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
        <SwiperSlide key={items.id}>
          <div className="item">
              <div className="item__images">
                <Image src={items.img} width={4000} height={500} alt={items.alt}/>
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlidersCustom;

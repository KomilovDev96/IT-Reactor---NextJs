import React, { useRef, useState } from "react";
import styles from "./slider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ItemsSlider } from "./SliderITems";
import Image from "next/image";
import { Container } from "styled-bootstrap-grid";
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
          <div className={styles.item}>
            <div className={styles.image}>
              <Image
                src={items.img}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt={items.alt}
              />
            </div>
            <Container>
              <div className={styles.position}>
                <div className={styles.title}>
                  <h1>IT Reactor - Zamonaviy kasblar markazi</h1>
                </div>
                <div className={styles.text}>
                  <p>
                    Biz sizga ta'lim berishdan charchamaymiz siz esa o'qishdan
                    charchamang!
                  </p>
                </div>
                <div className={styles.button}>
                  <button>Batafsil ma'lumot</button>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlidersCustom;

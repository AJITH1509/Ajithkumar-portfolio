import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./project.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export function Project() {
  return (
    <div className="project-main-container">
      <h1>Project</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div className="slider-buttons">
            <button>backend</button>
            <button>backend</button>
            <button>backend</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <div className="slider-buttons">
            <button>backend</button>
            <button>backend</button>
            <button>backend</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div className="slider-buttons">
            <button>backend</button>
            <button>backend</button>
            <button>backend</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="slider-buttons">
            <button>backend</button>
            <button>backend</button>
            <button>backend</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

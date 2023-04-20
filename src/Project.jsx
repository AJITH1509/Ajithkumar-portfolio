import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import dailycolor from "../images/dailycolor.jpg";
import movieApp from "../images/movieApp.jpg";
import urlShortener from "../images/urlShortener.jpg";
import webScrapper from "../images/webScrapper.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./project.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const openLink = (link) => {
  window.open(link);
};

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
          <img src={dailycolor} />
          <div className="slider-buttons">
            <button>FrontEnd Source</button>
            <button>Live</button>
            <button>BackEnd Source</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={movieApp} />
          <div className="slider-buttons">
            <button>FrontEnd Source</button>
            <button onClick={openLink("https://allinone1.netlify.app/")}>
              Live
            </button>
            <button>BackEnd Source</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={urlShortener} />
          <div className="slider-buttons">
            <button>FrontEnd Source</button>
            <button>Live</button>
            <button>BackEnd Source</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={webScrapper} />
          <div className="slider-buttons">
            <button>FrontEnd Source</button>
            <button>Live</button>
            <button>BackEnd Source</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

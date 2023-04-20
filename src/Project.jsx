import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dailycolor from "../images/dailycolor.jpg";
import movieApp from "../images/movieApp.jpg";
import urlShortener from "../images/urlShortener.jpg";
import webScrapper from "../images/webScrapper.jpg";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./project.css";

export function Project() {
  const projects = [
    {
      id: "daily-color",
      imgSrc: dailycolor,
      frontEndSource: "https://github.com/AJITH1509/capstone-project-front-end",
      live: "https://daily-color.netlify.app",
      backEndSource: "https://github.com/AJITH1509/Capstone-project-back-end",
    },
    {
      id: "movie-app",
      imgSrc: movieApp,
      frontEndSource: "https://github.com/AJITH1509/react-movie-task",
      live: "https://allinone1.netlify.app",
      backEndSource: "https://github.com/AJITH1509/express.js-practice",
    },
    {
      id: "url-shortener",
      imgSrc: urlShortener,
      frontEndSource: "https://github.com/AJITH1509/url-shortener",
      live: "https://mini-link.netlify.app",
      backEndSource: "https://github.com/AJITH1509/Url-shortener-node",
    },
    {
      id: "web-scrapper",
      imgSrc: webScrapper,
      frontEndSource:
        "https://github.com/AJITH1509/webcode-2-webscrape-frontend",
      live: "https://graceful-syrniki-59528c.netlify.app/",
      backEndSource:
        "https://github.com/AJITH1509/webcode-2-webscraping-backend",
    },
  ];

  const openLink = (link) => {
    console.log("hi");
    window.open(link, "_blank");
  };

  return (
    <div className="project-main-container">
      <h1>Project</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        navigation
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <img src={project.imgSrc} alt={`Project ${project.id}`} />
            <div className="slider-buttons">
              <button onClick={() => openLink(project.frontEndSource)}>
                FrontEnd Source
              </button>
              <button onClick={() => openLink(project.live)}>Live</button>
              <button onClick={() => openLink(project.backEndSource)}>
                BackEnd Source
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

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
import { useEffect } from "react";
import AOS from "aos";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";

export function Project() {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  const projects = [
    {
      id: "daily-color",
      title: "Daily color suggestion",
      imgSrc: dailycolor,
      frontEndSource: "https://github.com/AJITH1509/capstone-project-front-end",
      live: "https://daily-color.netlify.app",
      backEndSource: "https://github.com/AJITH1509/Capstone-project-back-end",
    },
    {
      id: "movie-app",
      title: "Movie Review App",
      imgSrc: movieApp,
      frontEndSource: "https://github.com/AJITH1509/react-movie-task",
      live: "https://allinone1.netlify.app",
      backEndSource: "https://github.com/AJITH1509/express.js-practice",
    },
    {
      id: "url-shortener",
      title: "Url Shortener",
      imgSrc: urlShortener,
      frontEndSource: "https://github.com/AJITH1509/url-shortener",
      live: "https://mini-link.netlify.app",
      backEndSource: "https://github.com/AJITH1509/Url-shortener-node",
    },
    {
      id: "web-scrapper",
      title: "Web Scrapper",
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
    <div style={{ backgroundColor: styles }} className="project-main-container">
      <h1 data-aos="fade-down" data-aos-delay="500">
        Project
      </h1>
      <Swiper
        data-aos="fade-up"
        data-aos-delay="500"
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
            <h2>{project.title}</h2>
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

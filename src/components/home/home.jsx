import React, { useRef, useState } from "react";
import "./home.css"; 
import HeroSection from "../herosection"; 
// import HeroIframe from "../heroIframe";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <HeroSection />
      {/* <HeroIframe /> */}
      <section className="bg-black text-white">
        <div className="container ml-24 w-[calc(100%-6rem)] text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-20">
            <div className="flex">
              <h1 className="text-3xl font-extrabold">OUR CAPABILITIES</h1>
            </div>
            <div className="flex">
              <h3 className="font-medium text-start">
                With our knowledge, experienced people and specialist equipment
                we are not afraid of any challenges.
              </h3>
            </div>
            <div className="flex justify-end mr-10 max-md:justify-start">
                <a href="/capabalities">
                <h3 className="font-bold">See All</h3>
              </a>
            </div>
          </div>
        </div>
        <section>
          <div className="container ml-24 w-[calc(100%-6rem)] text-center carousel-container">
            <div className="side-swiper">
              {/* Thumbnails carousel */}
              <Swiper
                onSwiper={setThumbsSwiper}
                freeMode={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt="thumb 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    alt="thumb 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    alt="thumb 3"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="nature 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="nature 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="nature 3"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
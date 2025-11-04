import { useState } from "react";
import "./home.css";
import HeroSection from "../herosection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Arrow from "../../assets/b1.svg";
import uavHomepage from "../../assets/UAV-homepage.jpg";
import cncUpclose from "../../assets/CNC-upclose-homepage.JPG";
import radomeHomepage from "../../assets/radome-homepage.jpg";

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Image paths & descriptions
  const swiperImages = [
    {
      src: uavHomepage,
      title: "UAV Manufacturing",
      desc: "Advanced UAV production with precision engineering and cutting-edge technology.",
    },
    {
      src: cncUpclose,
      title: "CNC Precision Manufacturing",
      desc: "High-precision CNC machining for complex components and intricate designs.",
    },
    {
      src: radomeHomepage,
      title: "Radome Production",
      desc: "Specialized radome manufacturing for aerospace and defense applications with superior quality.",
    },
  ];

  return (
    <div>
      <HeroSection />
      <section className="bg-black text-white">
        {/* Section Header */}
        <div className="container ml-24 w-[calc(100%-6rem)] text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-20">
            <div className="flex">
              <h1 className="text-3xl font-extrabold uppercase">our capabilities</h1>
            </div>
            <div className="flex">
              <h3 className="font-medium text-start">
                Empowered by state-of-the-art infrastructure and a dedicated team, we craft high-performance solutions tailored to every industry&apos;s unique needs.
              </h3>
            </div>
            {/* <div className="flex justify-end mr-10 max-md:justify-start">
              <a href="/ourCapabilities/canopy-production">
                <h3 className="font-bold">See All</h3>
              </a>
            </div> */}
          </div>
        </div>

        {/* Image Slider Section */}
        <div className="container w-[calc(100%-6rem)] flex mx-auto gap-6 ">
          {/* Vertical Thumbnails */}
          <div className="w-1/6 sm:flex flex-col space-y-4 hidden fade-in">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-[650px] overflow-hidden"
            >
              {swiperImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative ${
                      activeIndex === index ? "" : "overlay"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={`thumb ${index}`}
                      className="w-full h-48 object-cover cursor-pointer transition duration-300 hover:brightness-110 px-4"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Main Image & Navigation */}
          <div className="w-full sm:w-4/6 flex flex-col sm:ml-auto sm:pr-10 fade-in-right">
            <Swiper
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-[500px] overflow-hidden"
            >
              {swiperImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.src}
                    alt={`image ${index}`}
                    className="w-full h-full object-fit transition duration-300 hover:brightness-110"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Description & Custom Navigation Buttons */}
            <div className="mt-12 flex justify-between items-center">
              {/* Dynamic Description based on active slide */}
              <div className=" max-w-[calc(100%-30%)] sm:max-w-full">
                <h2 className="text-xl font-semibold uppercase text-[#8e8e8e]">
                  {swiperImages[activeIndex].title}
                </h2>
                <p className="text-lg mt-4 font-[500]">
                  {swiperImages[activeIndex].desc}
                </p>
              </div>

              {/* Custom Navigation Buttons */}
              <div className="flex space-x-4">
                <button className="custom-prev bg-black p-1 sm:px-2 sm:py-3">
                  <img
                    src={Arrow}
                    alt="Left Arrow"
                    className="w-[70px] sm:w-12 sm:h-12"
                  />
                </button>
                <button className="custom-next p-1 sm:px-2 sm:py-3 bg-black transition">
                  <img
                    src={Arrow}
                    alt="Right Arrow" 
                    className="w-[70px] sm:w-12 sm:h-12 rotate-180"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

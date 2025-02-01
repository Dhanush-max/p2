import React, { useRef, useState } from "react";

import Header from "./header"; // Ensure the file path and name are correct
import Footer from "./footer"; // Ensure the file path and name are correct
import "./home.css"; // Ensure the file path and name are correct
import HeroSection from "./herosection"; // Ensure the file path and name are correct
import { Swiper, SwiperSlide } from "swiper/react";
import air from "../assets/air.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Header />
      <HeroSection />
      <section className="bg-black text-white">
        <div className="container ml-24 w-[calc(100%-6rem)] text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-20">
            <div className="flex">
              <h1 className="text-2xl font-bold">Our Capabilities</h1>
            </div>
            <div className="flex">
              <h3 className="font-bold text-start">
                With our knowledge, experienced people and specialist equipment
                we are not afraid of any challenges.
              </h3>
            </div>
            <div className="flex justify-end mr-10 max-md:justify-start">
              <h3 className="font-bold">See All</h3>
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
      <section className="ml-24 w-[calc(100%-6rem)] py-8 relative flex z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
          {/* First Image */}
          <div className="relative overflow-hidden mt-8">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Placeholder Image 1"
              className="w-full h-auto"
            />
            <div className="absolute w-40 bottom-0 right-0 bg-white bg-opacity-90 p-4 text-center">
              <h3 className="text-lg font-bold">Description 1</h3>
              <p className="text-sm text-gray-600">
                Description for the first image. Description for the first
                image. Description for the first image.
              </p>
            </div>
          </div>

          {/* Second Image */}
          <div className="relative overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Placeholder Image 2"
              className="w-full h-auto"
            />
            <div className="absolute w-40 bottom-0 right-0 bg-white bg-opacity-90 p-4 text-center">
              <h3 className="text-lg font-bold">Title 2</h3>
              <p className="text-sm text-gray-600">
                Description for the second image. Description for the second
                image. Description for the second image.
              </p>
            </div>
          </div>

          {/* Third Image */}
          <div className="relative overflow-hidden mt-8">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Placeholder Image 3"
              className="w-full h-auto"
            />
            <div className="absolute w-40 bottom-0 right-0 bg-white bg-opacity-90 p-4 text-center">
              <h3 className="text-lg font-bold">Title 3</h3>
              <p className="text-sm text-gray-600">
                Description for the third image. Description for the third
                image. Description for the third image.
              </p>
            </div>
          </div>

          {/* Fourth Image */}
          <div className="relative overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Placeholder Image 4"
              className="w-full h-auto"
            />
            <div className="absolute w-40 bottom-0 right-0 bg-white bg-opacity-90 p-4 text-center">
              <h3 className="text-lg font-bold">Title 4</h3>
              <p className="text-sm text-gray-600">
                Description for the fourth image. Description for the fourth
                image. Description for the fourth image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col md:flex-row z-30 mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="owl-carousel owl-theme h-full"
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              {/* Image (on the left side) */}
              <div className="w-full md:w-2/3 h-64 md:h-full mt-5 md:mt-14">
                <img
                  src={air}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text (on the right side for md and above, below image for smaller screens) */}
              <div className="relative bg-gray-300 md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-full md:bottom-[4rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
                <div className="w-full md:w-[calc(100%/5*2.9)] h-auto md:h-[90%] text-center text-white md:content-center">
                  <h2 className="text-2xl font-semibold text-black">
                    Card Title 3
                  </h2>
                  <p className="text-black mt-2 p-5">
                    Description for card 3 goes here. You can add more content
                    to explain the image.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              {/* Image (on the left side) */}
              <div className="w-full md:w-2/3 h-64 md:h-full mt-5 md:mt-14">
                <img
                  src={air}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text (on the right side for md and above, below image for smaller screens) */}
              <div className="relative bg-gray-300 md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-full md:bottom-[4rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
                <div className="w-full md:w-[calc(100%/5*2.9)] h-auto md:h-[90%] text-center text-white md:content-center">
                  <h2 className="text-2xl font-semibold text-black">
                    Card Title 3
                  </h2>
                  <p className="text-black mt-2 p-5">
                    Description for card 3 goes here. You can add more content
                    to explain the image.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              {/* Image (on the left side) */}
              <div className="w-full md:w-2/3 h-64 md:h-full mt-5 md:mt-14">
                <img
                  src={air}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text (on the right side for md and above, below image for smaller screens) */}
              <div className="relative bg-gray-300 md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-full md:bottom-[4rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
                <div className="w-full md:w-[calc(100%/5*2.9)] h-auto md:h-[90%] text-center text-white md:content-center">
                  <h2 className="text-2xl font-semibold text-black">
                    Card Title 3
                  </h2>
                  <p className="text-black mt-2 p-5">
                    Description for card 3 goes here. You can add more content
                    to explain the image.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

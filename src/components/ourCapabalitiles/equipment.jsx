import air from "../../assets/air.jpg";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper's navigation styles
import "./styles.css"; // Add your CSS styles here
import { Pagination, Navigation } from "swiper/modules";
import "./styles.css";
import HeroImgSection from "../heroImgSection";
const Equpiments = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay for smooth entrance
    setTimeout(() => setIsVisible(true), 100); // Adjust delay if needed
  }, []);
  return (
    <>
      <HeroImgSection img={air} />
      <section className="tech ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col z-30 mx-auto">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0} // Space between slides
          pagination={{
            clickable: true,
          }}
          loop={true} // Enable loop mode
          navigation={true} // Enable navigation
          centeredSlides={true}
          modules={[Pagination, Navigation]} // Include Navigation module
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-[90%] md:w-[70%] bg-white text-black p-5 mx-auto md:mx-0 md:absolute z-10 md:bottom-9 md:left-0 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
            laudantium beatae voluptas ea qui quidem quos! Est, iusto sunt quam
            voluptates magni quia, obcaecati doloremque vero laboriosam eaque
            eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto magni ullam aut perspiciatis! Nesciunt sequi aperiam a,
            atque similique, nisi ab, explicabo blanditiis voluptate quia
            repellat! Soluta qui laborum sapiente.
          </p>
        </div>
      </section>
      {/* 2nd carsoul */}
      <section className="tech ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col z-30 mx-auto">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0} // Space between slides
          pagination={{
            clickable: true,
          }}
          loop={true} // Enable loop mode
          navigation={true} // Enable navigation
          centeredSlides={true}
          modules={[Pagination, Navigation]} // Include Navigation module
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-[90%] md:w-[70%] bg-white text-black p-5 shadow-md rounded-md mx-auto md:mx-0 md:absolute z-10 md:bottom-9 md:left-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
            laudantium beatae voluptas ea qui quidem quos! Est, iusto sunt quam
            voluptates magni quia, obcaecati doloremque vero laboriosam eaque
            eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto magni ullam aut perspiciatis! Nesciunt sequi aperiam a,
            atque similique, nisi ab, explicabo blanditiis voluptate quia
            repellat! Soluta qui laborum sapiente.
          </p>
        </div>
      </section>
      {/* 3rd carsoul */}
      <section className="tech ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col z-30 mx-auto">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0} // Space between slides
          pagination={{
            clickable: true,
          }}
          loop={true} // Enable loop mode
          navigation={true} // Enable navigation
          centeredSlides={true}
          modules={[Pagination, Navigation]} // Include Navigation module
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
              <div className="w-[90%]">
                <img
                  src={air}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-[90%] md:w-[70%] bg-white text-black p-5  mx-auto md:mx-0 md:absolute z-10 md:bottom-9 md:left-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
            laudantium beatae voluptas ea qui quidem quos! Est, iusto sunt quam
            voluptates magni quia, obcaecati doloremque vero laboriosam eaque
            eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto magni ullam aut perspiciatis! Nesciunt sequi aperiam a,
            atque similique, nisi ab, explicabo blanditiis voluptate quia
            repellat! Soluta qui laborum sapiente.
          </p>
        </div>
      </section>
    </>
  );
};

export default Equpiments;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageCarousel = ({ imageList, description }) => {
  return (
    <section className="tech ml-19 w-[100%] md:ml-24 md:w-[calc(100%-6rem)] pb-8 relative flex flex-col z-30 mx-auto">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={{ clickable: true }}
        // loop={true}
        navigation={true}
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center h-full overflow-hidden  md:left-[10%]">
              <div className="w-[90%]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-[90%] md:w-[70%] bg-white text-black p-5 mx-auto md:mx-0 md:absolute z-10 md:bottom-9 md:left-[5%] motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ImageCarousel;

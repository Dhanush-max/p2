import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ImageWithLoader from "../common/ImageWithLoader";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageCarousel = ({ imageList, description }) => {
  // If only one image, show a simple static display
  if (imageList.length === 1) {
    return (
      <section className="tech ml-19 w-[100%] md:ml-24 md:w-[calc(100%-6rem)] pb-8 relative flex flex-col z-30 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:h-[600px] overflow-hidden">
          <div className="w-[90%]">
            <ImageWithLoader
              src={imageList[0]}
              alt="Single Image"
              className="w-full h-full object-cover"
              loaderClassName="w-full h-full"
            />
          </div>
        </div>
        <div className="w-[90%] md:w-[70%] bg-white text-black p-6 mx-auto md:mx-0 md:absolute z-10 md:bottom-9 md:left-[5%] motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <p>{description}</p>
        </div>
      </section>
    );
  }

  // For multiple images, show carousel but disable loop if less than 3 images
  const shouldLoop = imageList.length >= 3;
  
  return (
    <section className="tech ml-19 w-[100%] md:ml-24 md:w-[calc(100%-6rem)] pb-8 relative flex flex-col z-30 mx-auto">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={shouldLoop}
        centeredSlides={true}
        modules={[Navigation]}  
        className="mySwiper"
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center md:h-[600px] overflow-hidden md:left-[10%]">
              <div className="w-[90%]">
                <ImageWithLoader
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loaderClassName="w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="hidden md:block">
      <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-4 py-6 rounded-md shadow-lg bg-opacity-40 hover:bg-gray-700 hover:bg-opacity-70 z-50">
        &#8592;
      </button>
      <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-4 py-6 rounded-md shadow-lg  bg-opacity-40 hover:bg-gray-700 hover:bg-opacity-70 z-50">
        &#8594;
      </button>
      </div>
      <div className="w-[90%] md:w-[70%] bg-white text-black p-6 mx-auto md:mx-0 md:absolute z-10 md:bottom-9 md:left-[5%] motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ImageCarousel;
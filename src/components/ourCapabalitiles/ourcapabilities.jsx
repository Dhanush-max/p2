import React from "react";
import vid from "../../assets/vid.mp4";
import air from "../../assets/air.jpg";
import Header from "../header";
import Footer from "../footer";

import "swiper/css";
const Capabalitites = () => {
  return (
    <>
      <Header />
      <section className="absolute inset-0 w-full h-full z-20">
        <div className="ml-24 w-[calc(100%-6rem)] h-full">
          <div className="h-full mx-0 flex flex-wrap">
            <div className="border-l border-r border-white h-full basis-0 grow max-w-full"></div>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="border-r border-white h-full basis-0 grow max-w-full"
              ></div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-transparent to-black h-screen section-before relative z-10">
        <div className="w-full h-screen absolute z-0">
          <video className="object-cover w-full h-full" autoPlay muted loop>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20"></div>
        <div className="flex items-center pt-60 ml-24 w-[calc(100%-6rem)] z-30">
          <div className="relative bg-white p-5 h-fit">
            <div className="text-black text-6xl">Let's Fly!</div>
          </div>
        </div>
      </section>
      <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col md:flex-row z-30 mx-auto">
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
          <div className="relative bg-gray-300  md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-[80%] md:bottom-[6rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
            <div className="w-full md:w-[calc(100%/5*2.9)] md:h-[90%] text-center text-white md:content-center">
              <h2 className="text-2xl font-semibold text-black">
                Card Title 3
              </h2>
              <p className="text-black mt-2 p-5">
                Description for card 3 goes here. You can add more content to
                explain the image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col md:flex-row z-30 mx-auto">
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
          <div className="relative bg-gray-300  md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-[80%] md:bottom-[6rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
            <div className="w-full md:w-[calc(100%/5*2.9)] md:h-[90%] text-center text-white md:content-center">
              <h2 className="text-2xl font-semibold text-black">
                Card Title 3
              </h2>
              <p className="text-black mt-2 p-5">
                Description for card 3 goes here. You can add more content to
                explain the image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col md:flex-row z-30 mx-auto">
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
          <div className="relative bg-gray-300  md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-[80%] md:bottom-[6rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
            <div className="w-full md:w-[calc(100%/5*2.9)] md:h-[90%] text-center text-white md:content-center">
              <h2 className="text-2xl font-semibold text-black">
                Card Title 3
              </h2>
              <p className="text-black mt-2 p-5">
                Description for card 3 goes here. You can add more content to
                explain the image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative md:flex-row z-30 mx-auto">
        <h1 className="text-2xl uppercase font-bold py-10 intersect:motion-preset-slide-up motion-delay-0">
          SERVICES
        </h1>
        <ul className="w-full md:w-[90%] bg-grey-100 uppercase space-y-4">
          <li className="border-b-2 border-black p-3 flex justify-between intersect:motion-preset-slide-up motion-delay-100">
            Design office <span className="font-bold text-2xl">{">"}</span>
          </li>
          <li className="border-b-2 border-black p-3 flex justify-between intersect:motion-preset-slide-up motion-delay-200">
            Paint shop <span className="font-bold text-2xl">{">"}</span>
          </li>
          <li className="border-b-2 border-black p-3 flex justify-between intersect:motion-preset-slide-up motion-delay-300">
            Canopy production <span className="font-bold text-2xl">{">"}</span>
          </li>
          <li className="border-b-2 border-black p-3 flex justify-between intersect:motion-preset-slide-up motion-delay-400">
            CNC milling <span className="font-bold text-2xl">{">"}</span>
          </li>
          <li className="border-b-2 border-black p-3 flex justify-between intersect:motion-preset-slide-up motion-delay-500">
            Cutting plotter <span className="font-bold text-2xl">{">"}</span>
          </li>
          <li className="border-b-2 border-black p-3 flex justify-between intersect:motion-preset-slide-up motion-delay-600">
            Production of models{" "}
            <span className="font-bold text-2xl">{">"}</span>
          </li>
          <li className="border-b-2 border-black p-3 flex justify-between intersect:motion-preset-slide-up motion-delay-700">
            Production of moulds and tooling
            <span className="font-bold text-2xl">{">"}</span>
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default Capabalitites;

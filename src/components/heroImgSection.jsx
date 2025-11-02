import React from "react";

const HeroImgSection = ({ img, title, details, gradientColor = "black" }) => {
  const svgColor = gradientColor === "black" ? "#fff" : "#000";

  return (
    <>
      <section className="h-screen relative">
        <div className="w-full h-screen absolute z-0 ">
          <img
            className="object-cover w-full h-full filter-brightness"
            src={img}
            alt="Unable to show the image"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 60%, ${gradientColor} 100%)`,
          }}
        ></div>
        <div className="flex items-center pt-80 ml-8 sm:ml-24 w-[calc(100%-6rem)] z-20 fade-in">
          <div className="relative p-5 h-fit">
            <div className={`font-bold text-5xl z-30 ${gradientColor === "black" ? "text-white" : "text-black"}`}>
              {title}
            </div>
            <div className={`text-base sm:text-xl max-w-[calc(100%-30%)] pt-10 sm:pt-16 z-30 ${gradientColor === "black" ? "text-white" : "text-black"}`}>
              {details}
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 right-10 z-30 flex flex-col items-center cursor-pointer"  onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }  >
          <span className="inline-block text-lg font-extrabold transform text-white -rotate-90 mb-2">
            scroll
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.342"
            height="52.483"
            viewBox="0 0 32.342 52.483"
            className="mt-6 cursor-pointer" // Add cursor-pointer for better UX
          >
            <g transform="translate(-1661.068 -952.998)">
              <line
                y2="18.703"
                transform="translate(1677.614 969.543)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="3"
                className="animate-dot-to-line"
              ></line>
              <g
                transform="translate(1661.069 952.998)"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
              >
                <rect
                  width="32.341"
                  height="52.483"
                  rx="16"
                  stroke="none"
                ></rect>
                <rect
                  x="1.5"
                  y="1.5"
                  width="29.341"
                  height="49.483"
                  rx="14.5"
                  fill="none"
                ></rect>
              </g>
            </g>
          </svg>
        </div>

      </section>
    </>
  );
};

export default HeroImgSection;
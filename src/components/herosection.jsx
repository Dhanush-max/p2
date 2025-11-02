import React, { useRef } from "react";
import vid1 from "../assets/Av1.mp4"; // Import your video file

const HeroSection = () => {
  const videoRef = useRef(null);

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen(); // For Safari
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen(); // For Firefox
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen(); // For IE/Edge
      }
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-transparent to-black h-screen section-before relative z-10">
        {/* Video Background */}
        <div className="w-full h-screen absolute z-0">
          <video
            ref={videoRef}
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            onLoadedMetadata={(e) => {
              e.target.currentTime = 10;
            }}
          >
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20"></div>

        {/* Hero Content */}
        <div className="absolute flex flex-col items-start pt-96 ml-24 w-[calc(100%-6rem)] z-30">
          {/* Main Heading */}
          <div className="relative bg-white py-3 px-5 h-fit">
            <div className="text-black font-semibold text-5xl">Experience Peridot Precision</div>
          </div>

          {/* See Movie Button */}
          <button
            onClick={handleFullScreen}
            className="ml-1 mt-16 flex items-center gap-4 text-white bg-transparent text-xl font-semibold relative z-50 animate-zoom"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="45.643"
              height="52.473"
              viewBox="0 0 45.643 52.473"
            >
              <defs>
                <clipPath id="a">
                  <rect width="45.643" height="52.473" fill="#fff" />
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path
                  d="M41.089,18.162a1.637,1.637,0,0,0-1.731,2.778,6.054,6.054,0,0,1,0,10.272L12.525,47.943a6.051,6.051,0,0,1-9.253-5.136V9.342a6.051,6.051,0,0,1,9.253-5.133l15.62,9.741a1.637,1.637,0,0,0,1.731-2.778L14.256,1.432A9.209,9.209,0,0,0,4.8,1.19,9.209,9.209,0,0,0,0,9.342V42.8a9.213,9.213,0,0,0,4.8,8.152,9.2,9.2,0,0,0,9.454-.242L41.086,33.983a9.324,9.324,0,0,0,0-15.821Zm0,0"
                  transform="translate(0 0)"
                  fill="#fff"
                />
              </g>
            </svg>
            see it in action
          </button>
        </div>
        <div
          className="absolute bottom-20 right-10 z-30 flex flex-col items-center cursor-pointer"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="inline-block text-lg font-extrabold transform text-white -rotate-90 mb-2">
            scroll
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.342"
            height="52.483"
            viewBox="0 0 32.342 52.483"
            className="mt-6 cursor-pointer"
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

export default HeroSection;

import React from "react";

const HeroIframe = ({ videoSrc, text, gradient, description }) => {
  return (
    <section className="h-screen w-screen section-before relative z-0">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className="absolute inset-0 z-20"
        style={{ background: gradient }}
      ></div>
      {/* Text Content */}
      <div className="absolute top-1/3 left-12 md:left-24 max-w-[50%] z-40">
        <div className="text-black text-6xl bg-white p-3 w-fit">{text}</div>
        <p className="mt-4 text-black  p-4 rounded-lg">{description}</p>
      </div>
    </section>
  );
};

export default HeroIframe;

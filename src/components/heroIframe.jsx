import React from "react";

const HeroIframe = () => {
  return (
    <>
      <section
        className=" h-screen section-before relative z-0"
        style={{
          background: `linear-gradient(to bottom, transparent 90%, black 10%)`,
        }}
      >
        <div className="w-full h-screen absolute z-0">
          <iframe
            className="object-cover w-full h-full"
            src="https://www.youtube.com/embed/QYYGBWniXnA?si=hMfqq21qQ4EqJopv&autoplay=1&loop=1&playlist=QYYGBWniXnA&mute=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20"></div>
        <div className="flex items-center pt-60 ml-24 w-[calc(100%-6rem)] z-30">
          <div className="relative px-6 py-4 z-40 bg-white">
            <div className="text-black text-6xl">Let's Fly!</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroIframe;

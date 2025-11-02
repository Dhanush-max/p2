import React, { useEffect, useRef, useState } from "react";
import ImageWithLoader from "../common/ImageWithLoader";

const ImageSec = ({ imageUrl, title, description }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative my-10 items-center justify-center flex ${
        isVisible ? "animate" : ""
      }`}
    >
      <div className="relative w-full sm:w-[75%] h-[50vh] lg:h-[70vh]">
        <ImageWithLoader
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover fade-in-right"
          loaderClassName="w-full h-full"
        />
        <div className="absolute bottom-0 left-0 px-4 pt-4 bg-white max-w-[calc(100%-15%)] ">
          <h2 className="text-xl sm:text-2xl font-extrabold fade-in-up">
            {title}
          </h2>
          <p
            className="mt-2 text-base sm:text-xl font-normal max-w-[calc(100%-15%)] fade-in-up"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ImageSec;

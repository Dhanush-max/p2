import React, { useEffect, useRef } from "react";
import HeroImgSection from "../heroImgSection";
import img from "../../assets/A1.jpg";
import Count from "./count";
import AboutVideo from "./aboutvideo";
import ImageSec from "./imageSec.jsx";
import Button from "../button.jsx";
import A3 from "../../assets/A3.jpg";
import A4 from "../../assets/A4.jpg";
import A5 from "../../assets/A5.jpg";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
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
    <div className="mx-auto">
      <HeroImgSection img={img} title="About Us" details="When creating our products, we strive to meet both strict security requirements and beautiful presentations." />
      {/* <Count /> */}
      <AboutVideo />
      {/* <div ref={sectionRef} className="bg-white sm:my-32 fade-in">
        <div className="flex flex-col items-start justify-start ml-14 sm:pl-28">
          <div className="text-xl font-extrabold text-black">PERIDOT ADVANCED METERIALS PVT LTD</div>
          <div className="text-base text-black mt-6 lg:max-w-[calc(100%-60%)] max-w-[calc(100%-20%)]">was founded out of love for aviation in 2025, but based on almost 30 years of experience obtained during the production of nearly 600 aircrafts.</div>
        </div>
      </div> */}
      <ImageSec imageUrl={A3} title="600 aircrafts, 6 continents" description="Over the years, our team has created about 600 aircraft of various types (among which there are gliders, motor gliders, light and ultralight aircrafts) that fly on 6 continents." />
      <ImageSec imageUrl={A4} title="5000 sq m area" description="Over the years, our team has created about 600 aircraft of various types (among which there are gliders, motor gliders, light and ultralight aircrafts) that fly on 6 continents." />
      <Button text="Production Facilities" href="/ourCapabilities/production-of-moulds" />
      <ImageSec imageUrl={A5} title="" description="We manufacture high quality composite parts, each piece is handmade (sometimes with mechanical help) with the utmost care. We manufacture both components and componentry as well as finished airframes.
      <br/><br/>Although the main trend of our activity is aviation, we also produce such composite parts as blades for fans of high power, used in mining, cooling towers and wind tunnels." />
      <Button text="Our Facilities" href="/ourCapabilities/canopy-production" />
      
    </div>
  );
};

export default About;
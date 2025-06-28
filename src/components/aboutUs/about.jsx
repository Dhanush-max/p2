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
      <ImageSec imageUrl={A3} title="Peridot Advanced Materials Pvt. Ltd" description="is a leading innovator and manufacturer specializing in high-performance composite materials, including carbon fibre, glass fibre, and other advanced composites. As a trusted name in the aerospace and defence sectors, Peridot provides cutting edge solutions that meet the rigorous demands of these industries, delivering unparalleled strength, durability, and lightweight properties for critical applications. " />
      <ImageSec imageUrl={A4} title="56,852 sq ft" description="Our facility in located in north Bengaluru in a 56,852 sq ft campus equipped with a start of the art manufacturing facilities making it a one stop solution for aerospace and defence composite manufacturing industries.
" />
      <Button text="Production Facilities" href="/ourCapabilities/production-of-moulds" />
      <ImageSec imageUrl={A5} title="" description="Our composite materials are engineered to withstand the most demanding environments, providing exceptional strength-to-weight ratios, high fatigue resistance, and excellent thermal stability. These qualities make our products ideal for applications in aircraft structures, defence systems, spacecraft, and more.
" />
      <Button text="Our Facilities" href="/ourCapabilities/canopy-production" />
      
    </div>
  );
};

export default About;
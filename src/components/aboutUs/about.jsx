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
      <HeroImgSection img={img} title="About Us" details="At Peridot Advanced Materials Pvt. Ltd., precision is our defining principle.
We are a leading innovator and manufacturer of high-performance composite materials — including carbon fibre, glass fibre, and hybrid composites — engineered to meet the most demanding requirements of aerospace, defence, and advanced industrial sectors.
" />
      {/* <Count /> */}
      <AboutVideo />
      {/* <div ref={sectionRef} className="bg-white sm:my-32 fade-in">
        <div className="flex flex-col items-start justify-start ml-14 sm:pl-28">
          <div className="text-xl font-extrabold text-black">PERIDOT ADVANCED METERIALS PVT LTD</div>
          <div className="text-base text-black mt-6 lg:max-w-[calc(100%-60%)] max-w-[calc(100%-20%)]">was founded out of love for aviation in 2025, but based on almost 30 years of experience obtained during the production of nearly 600 aircrafts.</div>
        </div>
      </div> */}
      <ImageSec imageUrl={A3} title="Peridot Advanced Materials Pvt. Ltd" description="We go beyond conventional manufacturing — combining specialized expertise, advanced infrastructure, and process excellence to deliver components that balance strength, lightweight efficiency, and structural reliability. Every product is crafted to meet strict safety, performance, and aesthetic standards.
" />
      {/* <Button text="Production Facilities" href="/ourCapabilities/production-of-moulds" /> */}
      <ImageSec imageUrl={A5} title="" description="Our 56,852 sq ft integrated facility in North Bengaluru is equipped with state-of-the-art composite manufacturing technologies, making Peridot a complete one-stop solution for composite engineering and production.
From design and tooling to fabrication, curing, and finishing, our facility houses advanced infrastructure such as autoclaves, CNC machining systems, 3D scanning and printing, clean rooms, hydraulic presses, and robotic automation — enabling precision at every step.
" />
      {/* <Button text="our capabilities" href="/ourCapabilities/canopy-production" /> */}
        <ImageSec imageUrl={A5} title="" description="Peridot’s materials and components are built to withstand extreme operational environments, offering exceptional strength-to-weight ratios, fatigue resistance, and thermal stability. These qualities make our solutions ideal for aircraft structures, defence systems, UAVs, spacecraft, and specialized industrial applications." />
        <ImageSec imageUrl={A5} title="" description="At Peridot, the “P” stands for Precision — a promise we deliver through innovation, craftsmanship, and a relentless pursuit of excellence. " />

        {/* Our Partners / Clients Section */}
        <section className="my-16 px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Partners / Clients</h2>
            <p className="text-gray-700 mb-2">
              Our trusted relationships with industry leaders stand as proof of our consistent quality and engineering excellence. Each collaboration strengthens our mission to deliver advanced composite solutions that perform under the most demanding conditions.
            </p>
            <p className="text-gray-700 mb-8">
              A selection of our esteemed partners is featured below.
            </p>
            {/* Add partner/client logos here if available */}
          </div>
        </section>
   
    </div>
  );
};

export default About;
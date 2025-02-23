import React from "react";
import Section from "./imageSection";
import HeroImgSection from "../heroImgSection";
import img from "../../assets/A1.jpg";
import HeroIframe from "../heroIframe";
import serviceVid from "../../assets/services.mp4";
const Services = () => {
  return (
    <div>
      <HeroIframe
        videoSrc={serviceVid}
        text={"Services"}
        gradient={`linear-gradient(to bottom, transparent 60%, white 100%)`}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quis voluptatum. Deserunt facere ex rerum corporis pariatur. Hic iusto qui eaque, earum dolore error molestiae, exercitationem, repellendus fugit omnis deserunt."
        }
      />

      <Section
        image="src/assets/design.jpg"
        altText="Design Office"
        bgColor="bg-[#f8f8f8]"
        title="Design office"
        description="In our design office we employ engineers who graduated from the best Polish technical universities."
        link="#"
      />
      <Section
        image="src/assets/paint.jpg"
        altText="PAINT SHOP"
        bgColor="bg-black"
        title="PAINT SHOP"
        description="We have a modern painting chamber, and also a grinding chamber."
        link="#"
      />
      <Section
        image="src/assets/canopy.jpg"
        altText="Canopy production"
        bgColor="bg-[#f8f8f8]"
        title="Canopy production"
        description="Scratch on the glass? Don't worry! Our offer includes canopies for single and two-seater gliders, and after delivery of appropriate equipment – also other aircrafts."
        link="#"
      />
      <Section
        image="src/assets/cnc.jpg"
        altText="CNC milling"
        bgColor="bg-black"
        title="CNC milling"
        description="Using a three-axis CNC machine we can create precise 3D models."
        link="#"
      />
      <Section
        image="src/assets/production.jpg"
        altText="Production of models"
        bgColor="bg-[#f8f8f8]"
        title="Production of models"
        description="We are passionate about aviation, we make small and bigger aircrafts models."
        link="#"
      />
      <Section
        image="src/assets/tooling.jpg"
        altText="Production of moulds and tooling"
        bgColor="bg-black"
        title="Production of moulds and tooling"
        description="We know what is necessary and how to do it."
        link="#"
      />
    </div>
  );
};

export default Services;

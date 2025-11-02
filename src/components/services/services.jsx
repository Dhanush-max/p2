import React from "react";
import Section from "./imageSection";
import HeroImgSection from "../heroImgSection";
import img from "../../assets/A1.jpg";
import HeroIframe from "../heroIframe";
import serviceVid from "../../assets/services.mp4";
import designImg from "../../assets/design.jpg";
import paintImg from "../../assets/paint.jpg";
import canopyImg from "../../assets/canopy.jpg";
import cncImg from "../../assets/cnc.jpg";
import productionImg from "../../assets/production.jpg";
import toolingImg from "../../assets/tooling.jpg";

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
        image={designImg}
        altText="Design Office"
        bgColor="bg-[#f8f8f8]"
        title="Design office"
        description="In our design office we employ engineers who graduated from the best Polish technical universities."
        link="#"
      />
      <Section
        image={paintImg}
        altText="DRY PAINT BOOTH"
        bgColor="bg-black"
        title="DRY PAINT BOOTH"
        description="We have a modern painting chamber, and also a grinding chamber."
        link="#"
      />
      <Section
        image={canopyImg}
        altText="Canopy production"
        bgColor="bg-[#f8f8f8]"
        title="Canopy production"
        description="Scratch on the glass? Don't worry! Our offer includes canopies for single and two-seater gliders, and after delivery of appropriate equipment – also other aircrafts."
        link="#"
      />
      <Section
        image={cncImg}
        altText="CNC milling"
        bgColor="bg-black"
        title="CNC milling"
        description="Using a three-axis CNC machine we can create precise 3D models."
        link="#"
      />
      <Section
        image={productionImg}
        altText="Production of models"
        bgColor="bg-[#f8f8f8]"
        title="Production of models"
        description="We are passionate about aviation, we make small and bigger aircrafts models."
        link="#"
      />
      <Section
        image={toolingImg}
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
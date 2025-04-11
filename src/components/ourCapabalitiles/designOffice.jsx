import design from "../../assets/design.jpg";
import design2 from "../../assets/design2.jpg";
import design3 from "../../assets/design3.jpg";
import design4 from "../../assets/design4.jpg";
import design5 from "../../assets/design5.jpg";
import design6 from "../../assets/design6.jpg";
import design7 from "../../assets/design7.jpg";
import design8 from "../../assets/design8.jpg";
import design9 from "../../assets/design2.jpg";
import design10 from "../../assets/design10.jpg";
import design11 from "../../assets/design11.jpg";
import design12 from "../../assets/design12.jpg";
import design13 from "../../assets/design13.jpg";
import design14 from "../../assets/design14.jpg";
import design15 from "../../assets/design15.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [
  design2,
  design3,
  design4,
  design5,
  design6,
  design7,
  design8,
  design9,
  design10,
  design11,
  design12,
  design13,
  design14,
  design15,
]; // Add more images as needed
const description =
  "Our design office is home to a team of highly skilled engineers who specialize in creating innovative and efficient designs. With years of experience, we have contributed to the development of numerous aircraft and engineering projects worldwide.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const DesignOffice = () => {
  return (
    <div>
      <HeroImgSection
        img={design}
        title="Design Office"
        details="Our design office employs engineers from top technical universities, delivering innovative solutions for the aviation industry."
      />
      <ImageSec
        imageUrl={design2}
        title="600 Aircraft, 6 Continents"
        description="Our team has designed over 600 aircraft of various types, including gliders, motor gliders, and ultralight aircraft, flying across 6 continents."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default DesignOffice;
import weavingMachine from "../../assets/weavingMachine.jpg";
import weavingMachine1 from "../../assets/weavingMachine1.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [weavingMachine1, weavingMachine, weavingMachine]; // Add more images as needed
const description =
  "Our weaving machine facility is designed to deliver precision and efficiency in weaving operations. With advanced technology, it ensures high-quality results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const WeavingMachine = () => {
  return (
    <div>
      <HeroImgSection
        img={weavingMachine1}
        title="Weaving Machine"
        details="Our weaving machine facility ensures high-quality and precise weaving products for all projects."
      />
      <ImageSec
        imageUrl={weavingMachine}
        title="State-of-the-art Weaving Machine"
        description="Our weaving machine facility is equipped with the latest technology to ensure high-quality and precise weaving products."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default WeavingMachine;
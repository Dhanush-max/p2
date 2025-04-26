import laserCuttingModeling from "../../assets/laserCutting.jpg";
import laserCuttingModeling2 from "../../assets/laserCutting1.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [laserCuttingModeling2, laserCuttingModeling, laserCuttingModeling]; // Add more images as needed
const description =
  "Our laser cutting modeling facility is designed to deliver precision and efficiency in cutting operations. With advanced technology, it ensures high-quality results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const LaserCuttingModeling = () => {
  return (
    <div>
      <HeroImgSection
        img={laserCuttingModeling2}
        title="Laser Cutting Modeling"
        details="Our laser cutting modeling facility ensures precise and accurate cuts for all projects."
      />
      <ImageSec
        imageUrl={laserCuttingModeling}
        title="State-of-the-art Laser Cutting Modeling"
        description="Our laser cutting modeling facility is equipped with the latest technology to ensure precise and accurate cuts."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default LaserCuttingModeling;
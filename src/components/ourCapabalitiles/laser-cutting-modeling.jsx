import laserCuttingModeling from "../../assets/2dlaser2.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [laserCuttingModeling, laserCuttingModeling, laserCuttingModeling]; // Add more images as needed
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eligendi quidem magni ratione corrupti deleniti quia assumenda consequuntur. Consectetur quidem sequi fugiat dolorem odio veritatis corrupti nulla! Blanditiis, magni quidem? ";
const listItems = [
  { name: "Paint shop", link: "/services/paint-shop" },
  { name: "Canopy production", link: "/services/canopy-production" },
  { name: "CNC milling", link: "/services/cnc-milling" },
  { name: "Cutting plotter", link: "/services/cutting-plotter" },
  { name: "Production of models", link: "/services/production-of-models" },
  { name: "Production of moulds and tooling", link: "/services/production-of-moulds-and-tooling" },
];

const LaserCuttingModeling = () => {
  return (
    <div>
      <HeroImgSection
        img={laserCuttingModeling}
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
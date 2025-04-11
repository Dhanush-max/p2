import canopyProduction from "../../assets/canopy.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [canopyProduction, canopyProduction, canopyProduction]; // Add more images as needed
const description =
  "Our canopy production facility is dedicated to delivering high-quality, durable, and precision-engineered canopies. With advanced manufacturing techniques, we ensure superior results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const CanopyProduction = () => {
  return (
    <div>
      <HeroImgSection
        img={canopyProduction}
        title="Canopy Production"
        details="Our canopy production facility ensures high-quality and precise canopies for all projects."
      />
      <ImageSec
        imageUrl={canopyProduction}
        title="State-of-the-art Canopy Production"
        description="Our canopy production facility is equipped with the latest technology to ensure high-quality and precise canopies."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default CanopyProduction;
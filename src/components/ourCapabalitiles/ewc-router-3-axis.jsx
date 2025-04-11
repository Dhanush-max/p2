import ewcRouter from "../../assets/ewcRouter.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [ewcRouter, ewcRouter, ewcRouter]; // Add more images as needed
const description =
  "Our EWC router is designed to deliver precision and efficiency in 3-axis routing operations. With advanced technology, it ensures high-quality results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const EWCRouter3Axis = () => {
  return (
    <div>
      <HeroImgSection
        img={ewcRouter}
        title="EWC Router - 3 Axis"
        details="Our EWC router provides precise and efficient 3-axis routing solutions."
      />
      <ImageSec
        imageUrl={ewcRouter}
        title="Advanced EWC Router - 3 Axis"
        description="Our EWC router is equipped with the latest technology to ensure precise and efficient 3-axis routing."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default EWCRouter3Axis;
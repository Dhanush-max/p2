import ewcRouter from "../../assets/ewcRouter.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";


const imageList = [ewcRouter, ewcRouter, ewcRouter]; // Add more images as needed
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
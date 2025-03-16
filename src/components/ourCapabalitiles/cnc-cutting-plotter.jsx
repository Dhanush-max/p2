import cncCuttingPlotter from "../../assets/cncCutting1.jpg";
import cncCuttingPlotter2 from "../../assets/cncCutting2.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [cncCuttingPlotter, cncCuttingPlotter2, cncCuttingPlotter]; // Add more images as needed
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

const CNCCuttingPlotter = () => {
  return (
    <div>
      <HeroImgSection
        img={cncCuttingPlotter}
        title="CNC Cutting Plotter"
        details="Our CNC cutting plotter provides precise and efficient cutting solutions."
      />
      <ImageSec
        imageUrl={cncCuttingPlotter2}
        title="Advanced CNC Cutting Plotter"
        description="Our CNC cutting plotter is equipped with the latest technology to ensure precise and efficient cutting."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default CNCCuttingPlotter;
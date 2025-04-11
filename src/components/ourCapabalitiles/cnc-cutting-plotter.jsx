import cncCuttingPlotter from "../../assets/cncCutting1.jpg";
import cncCuttingPlotter2 from "../../assets/cncCutting2.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [cncCuttingPlotter, cncCuttingPlotter2, cncCuttingPlotter]; // Add more images as needed
const description =
  "Our CNC cutting plotter is designed to deliver precision and efficiency in cutting operations. With advanced technology, it ensures high-quality results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
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
import oven from "../../assets/ovens.jpg";
import oven1 from "../../assets/ovens1.jpg";


import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [oven, oven1]; // Two unique oven images
const description =
  "Engineered for consistent curing cycles, it enhances component quality and structural integrity- supporting aerospace, defence, and industrial-grade composite applications.";
const listItems = [
  { name: "DRY PAINT BOOTH", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const Oven = () => {
  return (
    <div>
      <HeroImgSection
        img={oven1}
        title="COMPOSITE CURING OVEN"
        details="Ensuring uniformity and performance through precision-controlled curing environments."
      />
      <ImageSec
        imageUrl={oven}
        title="COMPOSITE CURING OVEN"
        description="Our 4 × 4 × 8 ft composite curing oven offers stable thermal performance for optimal material properties."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default Oven;
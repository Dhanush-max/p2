import paintShop from "../../assets/paint.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [paintShop, paintShop, paintShop]; // Add more images as needed
const description =
  "Our paint shop is designed to deliver high-quality painting services for various materials. With advanced equipment and skilled professionals, we ensure superior results.";
const listItems = [
  { name: "Design Office", link: "/services/design-office" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const PaintShop = () => {
  return (
    <div>
      <HeroImgSection
        img={paintShop}
        title="Paint Shop"
        details="Our paint shop provides high-quality painting services for various materials."
      />
      <ImageSec
        imageUrl={paintShop}
        title="State-of-the-art Paint Shop"
        description="Our paint shop is equipped with the latest technology to ensure high-quality painting services."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default PaintShop;
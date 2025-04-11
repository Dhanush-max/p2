import oven from "../../assets/oven.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [oven, oven, oven]; // Add more images as needed
const description =
  "Our oven facility is designed to deliver precise and controlled heating processes. With advanced technology, it ensures high-quality results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
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
        img={oven}
        title="Oven"
        details="Our oven facility ensures precise and controlled heating processes."
      />
      <ImageSec
        imageUrl={oven}
        title="State-of-the-art Oven"
        description="Our oven facility is equipped with the latest technology to ensure precise and controlled heating processes."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default Oven;
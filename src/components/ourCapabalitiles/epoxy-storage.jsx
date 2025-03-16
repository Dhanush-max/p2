import epoxyStorage from "../../assets/resin.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [epoxyStorage, epoxyStorage, epoxyStorage]; // Add more images as needed
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

const EpoxyStorage = () => {
  return (
    <div>
      <HeroImgSection
        img={epoxyStorage}
        title="Epoxy Storage"
        details="Our epoxy storage facility ensures high-quality and precise epoxy products for all projects."
      />
      <ImageSec
        imageUrl={epoxyStorage}
        title="State-of-the-art Epoxy Storage"
        description="Our epoxy storage facility is equipped with the latest technology to ensure high-quality and precise epoxy products."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default EpoxyStorage;
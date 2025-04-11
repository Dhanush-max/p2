import epoxyStorage from "../../assets/resin.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [epoxyStorage, epoxyStorage, epoxyStorage]; // Add more images as needed
const description =
  "Our epoxy storage facility is designed to preserve epoxy materials at optimal conditions. With advanced storage systems, we ensure the quality and longevity of epoxy products.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
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
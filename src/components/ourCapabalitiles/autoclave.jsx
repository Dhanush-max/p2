import autoclave from "../../assets/autoclave.jpg";
import autoclave2 from "../../assets/autoclave1.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [autoclave, autoclave2, autoclave]; // Add more images as needed

const description =
  "Our industrial autoclave facility features advanced high-pressure and high-temperature technology, ensuring precise composite curing and material processing. Trusted by aerospace, automotive, and medical industries, we deliver consistent, high-performance components that meet the most stringent standards.";

  const listItems = [
    { name: "Paint Shop", link: "/services/paint-shop" },
    { name: "Canopy Production", link: "/services/canopy-production" },
    { name: "CNC Milling", link: "/services/cnc-milling" },
    { name: "Cutting Plotter", link: "/services/cutting-plotter" },
    { name: "Production of Models", link: "/services/production-of-models" },
    { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
  ];
const Autoclave = () => {
  return (
    <div>
      <HeroImgSection
        img={autoclave}
        title="Autoclave"
        details="Delivering precision, strength, and reliability in composite manufacturing through advanced autoclave technology."
      />
      <ImageSec
        imageUrl={autoclave}
        title="Advanced Autoclave Technology for Composites"
        description="Our state-of-the-art industrial autoclave system is designed for high-performance composite curing, ensuring durability and dimensional accuracy for aerospace, automotive, and specialized industrial applications."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default Autoclave;

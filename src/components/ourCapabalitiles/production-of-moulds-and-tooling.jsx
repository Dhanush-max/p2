import productionOfMouldsAndTooling from "../../assets/productionMoulds.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [productionOfMouldsAndTooling, productionOfMouldsAndTooling, productionOfMouldsAndTooling]; // Add more images as needed
const description =
  "Our production of moulds and tooling facility is designed to deliver precision and efficiency in mould and tool manufacturing. With advanced technology, it ensures high-quality results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const ProductionOfMouldsAndTooling = () => {
  return (
    <div>
      <HeroImgSection
        img={productionOfMouldsAndTooling}
        title="Production of Moulds and Tooling"
        details="Our production of moulds and tooling facility ensures high-quality and precise moulds and tools for all projects."
      />
      <ImageSec
        imageUrl={productionOfMouldsAndTooling}
        title="State-of-the-art Production of Moulds and Tooling"
        description="Our production of moulds and tooling facility is equipped with the latest technology to ensure high-quality and precise moulds and tools."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default ProductionOfMouldsAndTooling;
import productionOfMouldsAndTooling from "../../assets/productionMoulds.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [productionOfMouldsAndTooling, productionOfMouldsAndTooling, productionOfMouldsAndTooling]; // Add more images as needed
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
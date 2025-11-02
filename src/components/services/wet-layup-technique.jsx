import fallbackImg from "../../assets/fallback.jpg";
let wetLayupImg;
try {
  wetLayupImg = require("../../assets/wet-layup-technique.jpg");
} catch (e) {
  wetLayupImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [wetLayupImg];
const description =
  "Our wet layup process enables flexibility in component size and geometry, ensuring strong fibre-resin bonding. Perfect for prototyping and specialized production, it allows tailored solutions for aerospace, defence, and industrial applications.";
const listItems = [
  { name: "COMPRESSION MOULDING", link: "/services/compression-moulding" },
  { name: "AUTOCLAVE CURING", link: "/services/autoclave-curing" },
  { name: "COMPOSITE MOULD MANUFACTURING", link: "/services/composite-mould-manufacturing" },
  { name: "COMPOSITE HONEYCOMB BONDING", link: "/services/composite-honeycomb-bonding" },
  { name: "RESIN INFUSION", link: "/services/resin-infusion" },
  { name: "CANOPY PRODUCTION", link: "/services/canopy-production" },
];

const WetLayupTechnique = () => {
  return (
    <div>
      <HeroImgSection
        img={wetLayupImg}
        title="WET LAYUP TECHNIQUE"
        details="Combining craftsmanship with material science."
      />
      <ImageSec
        imageUrl={wetLayupImg}
        title="WET LAYUP TECHNIQUE"
        description="Our wet layup process enables flexibility in component size and geometry, ensuring strong fibre-resin bonding. Perfect for prototyping and specialized production, it allows tailored solutions for aerospace, defence, and industrial applications."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default WetLayupTechnique;

import wetLayup1 from "../../assets/wet-layup-1.JPG";
import wetLayup2 from "../../assets/wet-layup-2.JPG";
import wetLayup3 from "../../assets/wet-layup-3.JPG";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

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
        img={wetLayup1}
        title="WET LAYUP TECHNIQUE"
        details="Combining craftsmanship with material science."
      />
      <ImageSec
        imageUrl={wetLayup2}
        title="WET LAYUP TECHNIQUE"
        description="Our wet layup process enables flexibility in component size and geometry, ensuring strong fibre-resin bonding. Perfect for prototyping and specialized production, it allows tailored solutions for aerospace, defence, and industrial applications."
      />
      <ImageCarousel imageList={[wetLayup2, wetLayup3]} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default WetLayupTechnique;

import canopyProd1 from "../../assets/canopy-prod-1.png";
import canopyProd2 from "../../assets/canopy-prod-2.png";
import canopyProd3 from "../../assets/canopy-prod-3.png";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [canopyProd1, canopyProd2, canopyProd3];
const description =
  "Our canopy production integrates composite forming, finishing, and quality control to deliver high-clarity, structurally robust components. Supported by advanced tooling and curing technology, we supply canopies that meet exact optical and aerodynamic specifications.";
const listItems = [
  { name: "COMPRESSION MOULDING", link: "/services/compression-moulding" },
  { name: "AUTOCLAVE CURING", link: "/services/autoclave-curing" },
  { name: "COMPOSITE MOULD MANUFACTURING", link: "/services/composite-mould-manufacturing" },
  { name: "COMPOSITE HONEYCOMB BONDING", link: "/services/composite-honeycomb-bonding" },
  { name: "RESIN INFUSION", link: "/services/resin-infusion" },
  { name: "WET LAYUP TECHNIQUE", link: "/services/wet-layup-technique" },
];

const CanopyProduction = () => {
  return (
    <div>
      <HeroImgSection
        img={canopyProd1}
        title="CANOPY PRODUCTION"
        details="Transparency, precision, and strength engineered together."
      />
      <ImageSec
        imageUrl={canopyProd1}
        title="CANOPY PRODUCTION"
        description="Our canopy production integrates composite forming, finishing, and quality control to deliver high-clarity, structurally robust components. Supported by advanced tooling and curing technology, we supply canopies that meet exact optical and aerodynamic specifications."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default CanopyProduction;

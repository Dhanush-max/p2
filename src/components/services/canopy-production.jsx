import fallbackImg from "../../assets/fallback.jpg";
let canopyImg;
try {
  canopyImg = require("../../assets/canopy-production.jpg");
} catch (e) {
  canopyImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [canopyImg];
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
        img={canopyImg}
        title="CANOPY PRODUCTION"
        details="Transparency, precision, and strength engineered together."
      />
      <ImageSec
        imageUrl={canopyImg}
        title="CANOPY PRODUCTION"
        description="Our canopy production integrates composite forming, finishing, and quality control to deliver high-clarity, structurally robust components. Supported by advanced tooling and curing technology, we supply canopies that meet exact optical and aerodynamic specifications."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default CanopyProduction;

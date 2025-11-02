import fallbackImg from "../../assets/fallback.jpg";
let autoclaveImg;
try {
  autoclaveImg = require("../../assets/autoclave-curing.jpg");
} catch (e) {
  autoclaveImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [autoclaveImg];
const description =
  "Using advanced high-pressure and high-temperature systems, we cure composite parts for optimal strength and durability. This process ensures void-free laminates and structural reliability—meeting the exacting demands of aerospace and mission-critical industries.";
const listItems = [
  { name: "COMPRESSION MOULDING", link: "/services/compression-moulding" },
  { name: "COMPOSITE MOULD MANUFACTURING", link: "/services/composite-mould-manufacturing" },
  { name: "COMPOSITE HONEYCOMB BONDING", link: "/services/composite-honeycomb-bonding" },
  { name: "RESIN INFUSION", link: "/services/resin-infusion" },
  { name: "WET LAYUP TECHNIQUE", link: "/services/wet-layup-technique" },
  { name: "CANOPY PRODUCTION", link: "/services/canopy-production" },
];

const AutoclaveCuring = () => {
  return (
    <div>
      <HeroImgSection
        img={autoclaveImg}
        title="AUTOCLAVE CURING"
        details="Precision curing for performance without compromise."
      />
      <ImageSec
        imageUrl={autoclaveImg}
        title="AUTOCLAVE CURING"
        description="Using advanced high-pressure and high-temperature systems, we cure composite parts for optimal strength and durability. This process ensures void-free laminates and structural reliability—meeting the exacting demands of aerospace and mission-critical industries."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default AutoclaveCuring;

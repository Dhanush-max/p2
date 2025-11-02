import fallbackImg from "../../assets/fallback.jpg";
let honeycombImg;
try {
  honeycombImg = require("../../assets/composite-honeycomb-bonding.jpg");
} catch (e) {
  honeycombImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [honeycombImg];
const description =
  "We specialize in honeycomb core bonding for sandwich-structured composites, achieving strength-to-weight ratios ideal for aerospace and mobility applications. Our precision bonding process ensures uniform adhesive distribution, long-term durability, and superior mechanical performance.";
const listItems = [
  { name: "COMPRESSION MOULDING", link: "/services/compression-moulding" },
  { name: "AUTOCLAVE CURING", link: "/services/autoclave-curing" },
  { name: "COMPOSITE MOULD MANUFACTURING", link: "/services/composite-mould-manufacturing" },
  { name: "RESIN INFUSION", link: "/services/resin-infusion" },
  { name: "WET LAYUP TECHNIQUE", link: "/services/wet-layup-technique" },
  { name: "CANOPY PRODUCTION", link: "/services/canopy-production" },
];

const CompositeHoneycombBonding = () => {
  return (
    <div>
      <HeroImgSection
        img={honeycombImg}
        title="COMPOSITE HONEYCOMB BONDING"
        details="Lightweight strength through advanced bonding technology."
      />
      <ImageSec
        imageUrl={honeycombImg}
        title="COMPOSITE HONEYCOMB BONDING"
        description="We specialize in honeycomb core bonding for sandwich-structured composites, achieving strength-to-weight ratios ideal for aerospace and mobility applications. Our precision bonding process ensures uniform adhesive distribution, long-term durability, and superior mechanical performance."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default CompositeHoneycombBonding;

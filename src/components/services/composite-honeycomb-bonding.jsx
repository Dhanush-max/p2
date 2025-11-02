import honeycombImg1 from "../../assets/honeycomb-bonding-1.jpg";
import honeycombImg2 from "../../assets/honeycomb-bonding-2.JPG";
import honeycombImg3 from "../../assets/honeycomb-bonding-3.JPG";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

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
        img={honeycombImg1}
        title="COMPOSITE HONEYCOMB BONDING"
        details="Lightweight strength through advanced bonding technology."
      />
      <ImageSec
        imageUrl={honeycombImg2}
        title="COMPOSITE HONEYCOMB BONDING"
        description="We specialize in honeycomb core bonding for sandwich-structured composites, achieving strength-to-weight ratios ideal for aerospace and mobility applications. Our precision bonding process ensures uniform adhesive distribution, long-term durability, and superior mechanical performance."
      />
      <ImageCarousel imageList={[honeycombImg2, honeycombImg3]} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default CompositeHoneycombBonding;

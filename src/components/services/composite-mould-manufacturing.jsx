import fallbackImg from "../../assets/fallback.jpg";
let mouldImg;
try {
  mouldImg = require("../../assets/composite-mould-manufacturing.jpg");
} catch (e) {
  mouldImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [mouldImg];
const description =
  "Our in-house tooling and mould manufacturing ensure accuracy, repeatability, and compatibility across all production stages. From design to machining and finishing, our process guarantees reliable moulds that deliver high-quality composite components every time.";
const listItems = [
  { name: "COMPRESSION MOULDING", link: "/services/compression-moulding" },
  { name: "AUTOCLAVE CURING", link: "/services/autoclave-curing" },
  { name: "COMPOSITE HONEYCOMB BONDING", link: "/services/composite-honeycomb-bonding" },
  { name: "RESIN INFUSION", link: "/services/resin-infusion" },
  { name: "WET LAYUP TECHNIQUE", link: "/services/wet-layup-technique" },
  { name: "CANOPY PRODUCTION", link: "/services/canopy-production" },
];

const CompositeMouldManufacturing = () => {
  return (
    <div>
      <HeroImgSection
        img={mouldImg}
        title="COMPOSITE MOULD MANUFACTURING"
        details="Crafting precision at the foundation of every part."
      />
      <ImageSec
        imageUrl={mouldImg}
        title="COMPOSITE MOULD MANUFACTURING"
        description="Our in-house tooling and mould manufacturing ensure accuracy, repeatability, and compatibility across all production stages. From design to machining and finishing, our process guarantees reliable moulds that deliver high-quality composite components every time."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default CompositeMouldManufacturing;

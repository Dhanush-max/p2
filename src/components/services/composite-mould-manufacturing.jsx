import mouldImg1 from "../../assets/composite-mould-1.JPG";
import mouldImg2 from "../../assets/composite-mould-2.JPG";
import mouldImg3 from "../../assets/composite-mould-3.JPG";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

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
        img={mouldImg1}
        title="COMPOSITE MOULD MANUFACTURING"
        details="Crafting precision at the foundation of every part."
      />
      <ImageSec
        imageUrl={mouldImg2}
        title="COMPOSITE MOULD MANUFACTURING"
        description="Our in-house tooling and mould manufacturing ensure accuracy, repeatability, and compatibility across all production stages. From design to machining and finishing, our process guarantees reliable moulds that deliver high-quality composite components every time."
      />
      <ImageCarousel imageList={[mouldImg2, mouldImg3]} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default CompositeMouldManufacturing;

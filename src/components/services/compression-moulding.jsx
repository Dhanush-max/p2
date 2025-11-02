import fallbackImg from "../../assets/fallback.jpg";
let compressionImg;
try {
  compressionImg = require("../../assets/compression-moulding.jpg");
} catch (e) {
  compressionImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [compressionImg];
const description =
  "Our compression moulding process uses high tonnage and temperature control to form complex composite structures with superior finish and uniformity. Ideal for high-strength components, it ensures dimensional accuracy and repeatable performance for aerospace, defence, and automotive applications.";
const listItems = [
  { name: "AUTOCLAVE CURING", link: "/services/autoclave-curing" },
  { name: "COMPOSITE MOULD MANUFACTURING", link: "/services/composite-mould-manufacturing" },
  { name: "COMPOSITE HONEYCOMB BONDING", link: "/services/composite-honeycomb-bonding" },
  { name: "RESIN INFUSION", link: "/services/resin-infusion" },
  { name: "WET LAYUP TECHNIQUE", link: "/services/wet-layup-technique" },
  { name: "CANOPY PRODUCTION", link: "/services/canopy-production" },
];

const CompressionMoulding = () => {
  return (
    <div>
      <HeroImgSection
        img={compressionImg}
        title="COMPRESSION MOULDING"
        details="Shaping innovation under pressure."
      />
      <ImageSec
        imageUrl={compressionImg}
        title="COMPRESSION MOULDING"
        description="Our compression moulding process uses high tonnage and temperature control to form complex composite structures with superior finish and uniformity. Ideal for high-strength components, it ensures dimensional accuracy and repeatable performance for aerospace, defence, and automotive applications."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default CompressionMoulding;

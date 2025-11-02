import fallbackImg from "../../assets/fallback.jpg";
let resinImg;
try {
  resinImg = require("../../assets/resin-infusion.jpg");
} catch (e) {
  resinImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [resinImg];
const description =
  "Our resin infusion techniques produce high-quality laminates with minimal voids and consistent fibre wet-out. Combining accuracy with process control, we deliver large and complex parts that meet the highest standards in strength and finish.";
const listItems = [
  { name: "COMPRESSION MOULDING", link: "/services/compression-moulding" },
  { name: "AUTOCLAVE CURING", link: "/services/autoclave-curing" },
  { name: "COMPOSITE MOULD MANUFACTURING", link: "/services/composite-mould-manufacturing" },
  { name: "COMPOSITE HONEYCOMB BONDING", link: "/services/composite-honeycomb-bonding" },
  { name: "WET LAYUP TECHNIQUE", link: "/services/wet-layup-technique" },
  { name: "CANOPY PRODUCTION", link: "/services/canopy-production" },
];

const ResinInfusion = () => {
  return (
    <div>
      <HeroImgSection
        img={resinImg}
        title="RESIN INFUSION"
        details="Efficiency and precision in closed-mould composite manufacturing."
      />
      <ImageSec
        imageUrl={resinImg}
        title="RESIN INFUSION"
        description="Our resin infusion techniques produce high-quality laminates with minimal voids and consistent fibre wet-out. Combining accuracy with process control, we deliver large and complex parts that meet the highest standards in strength and finish."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default ResinInfusion;

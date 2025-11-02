import resinInfusion1 from "../../assets/resin-infusion-1.png";
import resinInfusion2 from "../../assets/resin-infusion-2.png";
import resinInfusion3 from "../../assets/resin-infusion-3.png";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

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
        img={resinInfusion1}
        title="RESIN INFUSION"
        details="Efficiency and precision in closed-mould composite manufacturing."
      />
      <ImageSec
        imageUrl={resinInfusion2}
        title="RESIN INFUSION"
        description="Our resin infusion techniques produce high-quality laminates with minimal voids and consistent fibre wet-out. Combining accuracy with process control, we deliver large and complex parts that meet the highest standards in strength and finish."
      />
      <ImageCarousel imageList={[resinInfusion2, resinInfusion3]} description={description} />
      <SeeAlsoList title="Related Services" items={listItems} />
    </div>
  );
};

export default ResinInfusion;

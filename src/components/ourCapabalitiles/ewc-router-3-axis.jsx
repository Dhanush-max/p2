
import fallbackImg from "../../assets/fallback.jpg";
let cncRouter, cncRouter1, cncRouter2;
try {
  cncRouter = require("../../assets/ewc-router-3-axis.jpg");
} catch (e) {
  cncRouter = fallbackImg;
}
try {
  cncRouter1 = require("../../assets/ewc-router-3-axis-2.jpg");
} catch (e) {
  cncRouter1 = fallbackImg;
}
try {
  cncRouter2 = require("../../assets/ewc-router-3-axis-3.jpg");
} catch (e) {
  cncRouter2 = fallbackImg;
}

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [cncRouter, cncRouter1, cncRouter2];
const description =
  "With precision machining and smooth surface finish, we ensure every mould delivers repeatable performance across multiple production runs.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabalitiles/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabalitiles/composite-curing-oven" },
  { name: "CLEAN ROOM", link: "/ourCapabalitiles/clean-room-facility" },
];

const ThreeAxisCncPatternMouldMachine = () => {
  return (
    <div>
      <HeroImgSection
        img={cncRouter1}
        title="3-AXIS CNC PATTERN & MOULD MACHINE"
        details="Precision begins with perfect patterns and moulds."
      />
      <ImageSec
        imageUrl={cncRouter}
        title="3-AXIS CNC PATTERN & MOULD MACHINE"
        description="Our 3-axis CNC machines create high-accuracy tooling for composite and metal parts."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default ThreeAxisCncPatternMouldMachine;
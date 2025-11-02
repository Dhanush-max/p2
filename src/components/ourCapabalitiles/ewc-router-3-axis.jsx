
import cncRouter1 from "../../assets/cnc-router-1.JPG";
import cncRouter2 from "../../assets/cnc-router-2.JPG";
import cncRouter3 from "../../assets/cnc-router-3.JPG";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

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
        imageUrl={cncRouter2}
        title="3-AXIS CNC PATTERN & MOULD MACHINE"
        description="Our 3-axis CNC machines create high-accuracy tooling for composite and metal parts."
      />
      <ImageCarousel imageList={[cncRouter2, cncRouter3]} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default ThreeAxisCncPatternMouldMachine;
import fallbackImg from "../../assets/fallback.jpg";
let hydrolicPress;
try {
  hydrolicPress = require("../../assets/hydrolic.jpg");
} catch (e) {
  hydrolicPress = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [hydrolicPress, hydrolicPress, hydrolicPress];
const description =
  "Delivering consistent thickness, shape, and bonding, it supports high-strength applications in aerospace, defence, and mobility sectors.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabalitiles/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabalitiles/composite-curing-oven" },
  { name: "CLEAN ROOM", link: "/ourCapabalitiles/clean-room-facility" },
];

const HydrolicPress = () => {
  return (
    <div>
      <HeroImgSection
        img={hydrolicPress}
        title="650-TONNE HYDRAULIC PRESS"
        details="Powering precision through controlled pressure."
      />
      <ImageSec
        imageUrl={hydrolicPress}
        title="650-TONNE HYDRAULIC PRESS"
        description="Our 650-tonne hydraulic press forms large and complex composite components with uniform compaction."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default HydrolicPress;
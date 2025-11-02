import fallbackImg from "../../assets/fallback.jpg";
let roboticArm, roboticArm1, roboticArm2;
try {
  roboticArm = require("../../assets/6axis.jpg");
} catch (e) {
  roboticArm = fallbackImg;
}
try {
  roboticArm1 = require("../../assets/6axis2.jpg");
} catch (e) {
  roboticArm1 = fallbackImg;
}
try {
  roboticArm2 = require("../../assets/6axis3.jpg");
} catch (e) {
  roboticArm2 = fallbackImg;
}

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [roboticArm, roboticArm1, roboticArm2];
const description =
  "Designed for advanced automation, it enhances repeatability and reduces manual intervention—ensuring reliability across production cycles.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabalitiles/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabalitiles/composite-curing-oven" },
  { name: "CLEAN ROOM", link: "/ourCapabalitiles/clean-room-facility" },
];

const SixAxisRoboticArm = () => {
  return (
    <div>
      <HeroImgSection
        img={roboticArm1}
        title="6-AXIS CNC ROBOTIC ARM"
        details="Redefining precision and flexibility in composite manufacturing."
      />
      <ImageSec
        imageUrl={roboticArm}
        title="6-AXIS CNC ROBOTIC ARM"
        description="The 6-axis robotic arm allows complex machining, trimming, and drilling operations with micron-level accuracy."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default SixAxisRoboticArm;

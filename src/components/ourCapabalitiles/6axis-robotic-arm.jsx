import roboticArm1 from "../../assets/6axis-robotic-arm-1.jpg";
import roboticArm2 from "../../assets/6axis-robotic-arm-2.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

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
        imageUrl={roboticArm2}
        title="6-AXIS CNC ROBOTIC ARM"
        description="The 6-axis robotic arm allows complex machining, trimming, and drilling operations with micron-level accuracy."
      />
      <ImageCarousel imageList={[roboticArm2]} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default SixAxisRoboticArm;

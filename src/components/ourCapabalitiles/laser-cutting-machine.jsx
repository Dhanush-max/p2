import fallbackImg from "../../assets/fallback.jpg";
let laserCutImg;
try {
  laserCutImg = require("../../assets/laser-cutting-machine.jpg");
} catch (e) {
  laserCutImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [laserCutImg];
const description =
  "Ideal for complex geometries and lightweight structures, it enables efficiency, consistency, and zero-defect performance.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabilities/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabilities/composite-curing-oven" },
  { name: "DRY PAINT BOOTH", link: "/ourCapabilities/dry-paint-booth" },
  { name: "CLEAN ROOM", link: "/ourCapabilities/clean-room-facility" },
  { name: "COLD STORAGE", link: "/ourCapabilities/cold-storage" },
  { name: "LASER CUTTING MACHINE" }, // current page, no link
];

const LaserCuttingMachine = () => {
  return (
    <div>
      <HeroImgSection
        img={laserCutImg}
        title="LASER CUTTING MACHINE"
        details="Accuracy beyond measure for intricate designs."
      />
      <ImageSec
        imageUrl={laserCutImg}
        title="LASER CUTTING MACHINE"
        description="Our laser cutting technology provides fine detailing and clean cuts on composite and metallic materials."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default LaserCuttingMachine;

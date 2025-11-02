import fallbackImg from "../../assets/fallback.jpg";
let printerImg;
try {
  printerImg = require("../../assets/3d-printers.jpg");
} catch (e) {
  printerImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [printerImg];
const description =
  "Integrated with advanced 3D scanning, our digital manufacturing suite supports reverse engineering, inspection, and design validation with unmatched accuracy.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabilities/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabilities/composite-curing-oven" },
  { name: "DRY PAINT BOOTH", link: "/ourCapabilities/dry-paint-booth" },
  { name: "CLEAN ROOM", link: "/ourCapabilities/clean-room-facility" },
  { name: "COLD STORAGE", link: "/ourCapabilities/cold-storage" },
  { name: "3D SCANNER & 3D PRINTERS" }, // current page, no link
];

const ThreeDPrinters = () => {
  return (
    <div>
      <HeroImgSection
        img={printerImg}
        title="3D SCANNER & 3D PRINTERS"
        details="From concept to component with precision and speed."
      />
      <ImageSec
        imageUrl={printerImg}
        title="3D SCANNER & 3D PRINTERS"
        description="Our 3D printers (450 × 450 × 500 mm and 800 × 800 × 1000 mm) enable rapid prototyping and custom tooling."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default ThreeDPrinters;

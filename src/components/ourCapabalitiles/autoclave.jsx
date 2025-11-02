import fallbackImg from "../../assets/fallback.jpg";
let autoclave, autoclave2;
try {
  autoclave = require("../../assets/autoclave.jpg");
} catch (e) {
  autoclave = fallbackImg;
}
try {
  autoclave2 = require("../../assets/autoclave1.jpg");
} catch (e) {
  autoclave2 = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [autoclave, autoclave2, autoclave];
const description =
  "With advanced high-pressure and high-temperature systems, our autoclave facility ensures precise curing and material uniformity. Trusted by aerospace, automotive, and industrial clients, we deliver consistent, mission-ready components that meet global standards.";
const listItems = [
  { name: "AUTOCLAVES" }, // current page, no link
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabilities/composite-curing-oven" },
  { name: "DRY PAINT BOOTH", link: "/ourCapabilities/dry-paint-booth" },
  { name: "CLEAN ROOM", link: "/ourCapabilities/clean-room-facility" },
  { name: "COLD STORAGE", link: "/ourCapabilities/cold-storage" },
  { name: "3D SCANNER & 3D PRINTERS", link: "/ourCapabilities/3d-printers" },
];
const Autoclave = () => {
  return (
    <div>
      <HeroImgSection
        img={autoclave}
        title="AUTOCLAVES"
        details="Delivering precision, strength, and reliability through advanced autoclave technology."
      />
      <ImageSec
        imageUrl={autoclave}
        title="AUTOCLAVES"
        description="Our autoclaves (3 m × 5 m and 1.5 m × 2 m) are engineered for high-performance composite curing, ensuring dimensional accuracy and superior bonding."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default Autoclave;

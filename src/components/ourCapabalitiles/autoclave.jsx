import autoclave1 from "../../assets/autoclaves-main.png";
import autoclave22 from "../../assets/autoclave-1.jpg";
import autoclave2 from "../../assets/autoclave-2.jpg";
import autoclave3 from "../../assets/autoclave-3.png";
import autoclave4 from "../../assets/autoclave-4.png";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [autoclave2 , autoclave3 , autoclave4]; // Use second image for carousel to avoid repetition
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
        img={autoclave1}
        title="AUTOCLAVES"
        details="Delivering precision, strength, and reliability through advanced autoclave technology."
      />
      <ImageSec
        imageUrl={autoclave22}
        title="AUTOCLAVES"
        description="Our autoclaves (3 m × 5 m and 1.5 m × 2 m) are engineered for high-performance composite curing, ensuring dimensional accuracy and superior bonding."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default Autoclave;

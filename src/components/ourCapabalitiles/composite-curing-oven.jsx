import ovenImg1 from "../../assets/curing-oven-1.JPG";
import ovenImg2 from "../../assets/curing-oven-2.JPG";
import ovenImg3 from "../../assets/curing-oven-3.JPG";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const description =
  "Engineered for consistent curing cycles, it enhances component quality and structural integrity- supporting aerospace, defence, and industrial-grade composite applications.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabilities/autoclave" },
  { name: "COMPOSITE CURING OVEN" }, // current page, no link
  { name: "DRY PAINT BOOTH", link: "/ourCapabilities/dry-paint-booth" },
  { name: "CLEAN ROOM", link: "/ourCapabilities/clean-room-facility" },
  { name: "COLD STORAGE", link: "/ourCapabilities/cold-storage" },
  { name: "3D SCANNER & 3D PRINTERS", link: "/ourCapabilities/3d-printers" },
];

const CompositeCuringOven = () => {
  return (
    <div>
      <HeroImgSection
        img={ovenImg1}
        title="COMPOSITE CURING OVEN"
        details="Ensuring uniformity and performance through precision-controlled curing environments."
      />
      <ImageSec
        imageUrl={ovenImg2}
        title="COMPOSITE CURING OVEN"
        description="Our 4 × 4 × 8 ft composite curing oven offers stable thermal performance for optimal material properties."
      />
      <ImageCarousel imageList={[ovenImg2, ovenImg3]} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default CompositeCuringOven;

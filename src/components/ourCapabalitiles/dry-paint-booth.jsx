import paintBooth1 from "../../assets/PAINT-BOOTH-1.jpg";
import paintBooth2 from "../../assets/paint-booth-2.jpg";
import paintBooth3 from "../../assets/paint-booth-3.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [paintBooth2, paintBooth3]; // Exclude first image to avoid repetition
const description =
  "Delivering durable, high-quality finishes for aerospace, automotive, and engineering components—our booth guarantees both performance and visual excellence.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabilities/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabilities/composite-curing-oven" },
  { name: "DRY PAINT BOOTH" }, // current page, no link
  { name: "CLEAN ROOM", link: "/ourCapabilities/clean-room-facility" },
  { name: "COLD STORAGE", link: "/ourCapabilities/cold-storage" },
  { name: "3D SCANNER & 3D PRINTERS", link: "/ourCapabilities/3d-printers" },
];

const DryPaintBooth = () => {
  return (
    <div>
      <HeroImgSection
        img={paintBooth1}
        title="DRY PAINT BOOTH"
        details="Achieving flawless surface finishes through controlled coating environments."
      />
      <ImageSec
        imageUrl={paintBooth2}
        title="DRY PAINT BOOTH"
        description="Our industrial dry paint booth is designed for precision coating, ensuring uniform application and premium aesthetics."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default DryPaintBooth;

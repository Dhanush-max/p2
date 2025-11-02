import fallbackImg from "../../assets/fallback.jpg";
let prepregImg;
try {
  prepregImg = require("../../assets/cnc-prepreg-cutting-machine.jpg");
} catch (e) {
  prepregImg = fallbackImg;
}
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [prepregImg];
const description =
  "Delivering clean edges and consistent quality, our CNC system enhances manufacturing efficiency for aerospace, automotive, and defence applications.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabilities/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabilities/composite-curing-oven" },
  { name: "DRY PAINT BOOTH", link: "/ourCapabilities/dry-paint-booth" },
  { name: "CLEAN ROOM", link: "/ourCapabilities/clean-room-facility" },
  { name: "COLD STORAGE", link: "/ourCapabilities/cold-storage" },
  { name: "CNC PREPREG CUTTING MACHINE" }, // current page, no link
];

const CncPrepregCuttingMachine = () => {
  return (
    <div>
      <HeroImgSection
        img={prepregImg}
        title="CNC PREPREG CUTTING MACHINE"
        details="Precision cutting that transforms design into accuracy."
      />
      <ImageSec
        imageUrl={prepregImg}
        title="CNC PREPREG CUTTING MACHINE"
        description="Automated prepreg cutting ensures high-speed, waste-free processing of composite laminates."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default CncPrepregCuttingMachine;

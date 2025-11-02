import prepregImg1 from "../../assets/cnc-prepreg-1.JPG";
import prepregImg2 from "../../assets/cnc-prepreg-2.JPG";
import prepregImg3 from "../../assets/cnc-prepreg-3.JPG";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

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
        img={prepregImg1}
        title="CNC PREPREG CUTTING MACHINE"
        details="Precision cutting that transforms design into accuracy."
      />
      <ImageSec
        imageUrl={prepregImg2}
        title="CNC PREPREG CUTTING MACHINE"
        description="Automated prepreg cutting ensures high-speed, waste-free processing of composite laminates."
      />
      <ImageCarousel imageList={[prepregImg2, prepregImg3]} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default CncPrepregCuttingMachine;

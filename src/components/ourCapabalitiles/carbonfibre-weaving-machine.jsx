import weavingImg1 from "../../assets/carbon-weaving-1.png";
import weavingImg2 from "../../assets/carbon-weaving-2.png";
import weavingImg3 from "../../assets/carbon-weaving-3.png";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const description =
  "Our process ensures dimensional stability, superior tensile strength, and performance-ready materials for aerospace and high-end industrial use.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabilities/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabilities/composite-curing-oven" },
  { name: "DRY PAINT BOOTH", link: "/ourCapabilities/dry-paint-booth" },
  { name: "CLEAN ROOM", link: "/ourCapabilities/clean-room-facility" },
  { name: "COLD STORAGE", link: "/ourCapabilities/cold-storage" },
  { name: "CARBONFIBRE WEAVING MACHINE" }, // current page, no link
];

const CarbonfibreWeavingMachine = () => {
  return (
    <div>
      <HeroImgSection
        img={weavingImg1}
        title="CARBON FIBER WEAVING MACHINE"
        details="Engineering strength from the fiber up."
      />
      <ImageSec
        imageUrl={weavingImg2}
        title="CARBON FIBER WEAVING MACHINE"
        description="Advanced carbon fibre weaving for custom fabric architectures and reinforcement structures."
      />
      <ImageCarousel imageList={[weavingImg2, weavingImg3]} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default CarbonfibreWeavingMachine;
